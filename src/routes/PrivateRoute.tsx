import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { store } from "../redux/store";

interface PrivateRouteProps {
  children?: React.ReactNode;
}

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authenticated = useSelector(
    () => store.getState().authReducer.isAuthenticated,
  );

  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  return <React.Fragment>{children || <Outlet />}</React.Fragment>;
};

export default PrivateRoute;
