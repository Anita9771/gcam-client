import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const PrivateRoute = ({ children, role }) => {
  const { user } = useContext(AuthContext);
  
  if (!user) return <Navigate to="/join-us/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  
  return children;
};