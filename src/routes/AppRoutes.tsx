import Login from "@/auth/login";
import Signup from "@/auth/signup";
import ProductList from "@/dashboard/productList";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<ProductList />} />
    </Routes>
  );
};

export default AppRoutes;
