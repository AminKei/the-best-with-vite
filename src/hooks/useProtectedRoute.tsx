import React from "react";
import { Navigate } from "react-router-dom";
import { RoutePath } from "../constants/routes.path";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = false;
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  if (!isAuthenticated) {
    return <Navigate to={RoutePath.auth.login} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
