import { createAsyncThunk } from "@reduxjs/toolkit";
import { store } from "../store";
import { login } from "../slices/authSlice";
import { setupApiClient } from "../../services/apiAuth";

type SignInCredentials = {
  email: string;
  password: string;
};

export const userLogin = createAsyncThunk(
  "@user/login",
  async ({ email, password }: SignInCredentials, { rejectWithValue }) => {
    try {
      const response = await setupApiClient.post("sessions", {
        email,
        password,
      });
      const { token, refreshToken, permissions, roles, name } = response.data;
      console.log(refreshToken);
      store.dispatch(
        login({ email, name, permissions, roles, token, refreshToken }),
      );
      return response.data;
    } catch (err) {
      return rejectWithValue({
        title: "Falha ao Efetuar o login.",
        description: "E-mail ou senha inválidos",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  },
);
