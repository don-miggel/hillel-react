import { Navigate, Outlet, useLocation } from "react-router";
import { useAuthStore } from "../store/authStore";

export default function PublicRoute() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const location = useLocation();

  if (isAuthenticated)
    return <Navigate to={"/dashboard/map"} state={{ from: location }} />;

  return <Outlet />;
}