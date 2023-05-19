import axios, { AxiosError, AxiosResponse } from "axios";
import { AuthTokenError } from "./errors/AuthTokenError";
import { store } from "../redux/store";
import { logout, refresh } from "../redux/slices/authSlice";

let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess: (token: string) => void;
  onFailure: (err: AxiosError) => void;
}[] = [];

async function refreshTokenAndRetryRequest(
  refreshToken: string | undefined,
  originalConfig: any,
): Promise<AxiosResponse> {
  if (!isRefreshing) {
    isRefreshing = true;
    try {
      const response = await apiAuth.post("/refresh", {
        refreshToken: refreshToken,
      });
      const { token, refreshToken: newRefreshToken } = response.data;
      store.dispatch(refresh({ token, refreshToken: newRefreshToken }));

      apiAuth.defaults.headers["Authorization"] = `Bearer ${token}`;

      failedRequestsQueue.forEach((request) => request.onSuccess(token));
    } catch (err: any) {
      console.log("Erro no refresh");
      failedRequestsQueue.forEach((request) => request.onFailure(err));
      if (typeof window !== "undefined") {
        store.dispatch(logout());
      }
    } finally {
      isRefreshing = false;
      failedRequestsQueue = [];
    }
  }

  return new Promise((resolve, reject) => {
    failedRequestsQueue.push({
      onSuccess: (token: string) => {
        originalConfig.headers["Authorization"] = `Bearer ${token}`;
        resolve(apiAuth(originalConfig));
      },
      onFailure: (err: AxiosError) => {
        reject(err);
      },
    });
  });
}

function onResponseSuccess(response: AxiosResponse): AxiosResponse {
  return response;
}

async function onResponseError(error: any): Promise<any> {
  if (error.response?.status === 401) {
    if (error.response.data?.code === "token.expired") {
      const refreshToken = store.getState().authReducer.user?.refreshToken;
      const originalConfig = error.config as any;
      return refreshTokenAndRetryRequest(refreshToken, originalConfig);
    } else {
      if (typeof window !== "undefined") {
        store.dispatch(logout());
      } else {
        return Promise.reject(new AuthTokenError());
      }
    }
  }
  return Promise.reject(error);
}

function onRequest(config: any): any {
  const token = store.getState().authReducer.user?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

const token = store.getState().authReducer.user?.token;
const apiAuth = axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

apiAuth.interceptors.response.use(onResponseSuccess, onResponseError);
apiAuth.interceptors.request.use(onRequest);

export { apiAuth as setupApiClient };
