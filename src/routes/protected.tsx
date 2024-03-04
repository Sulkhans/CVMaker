import React from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [cookies] = useCookies(["authToken"]);

  return cookies.authToken ? <>{children}</> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
