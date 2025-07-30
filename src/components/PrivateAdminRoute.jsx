// routes/PrivateAdminRoute.jsx
import { Navigate, Outlet } from "react-router-dom";

export const PrivateAdminRoute = () => {
  const token = localStorage.getItem("adminToken");
  return token ? <Outlet /> : <Navigate to="/join-us/admin-login" />;
};

// export default PrivateAdminRoute;