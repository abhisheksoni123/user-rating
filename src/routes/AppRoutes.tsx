import Login from "@/auth/login";
import Signup from "@/auth/signup";
import DashboardLayout from "@/components/layput/DashboardLayout";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { storage } from "@/utils/storage";
import ProductListing from "@/dashboard/productListing";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<ProductListing />} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          storage.isLoggedIn() ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />
    </Routes>
  );
};

export default AppRoutes;
