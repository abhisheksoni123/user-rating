import { Navigate, Outlet } from "react-router-dom";
import { storage } from "@/utils/storage";

export default function ProtectedRoute() {
  return storage.isLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
}
