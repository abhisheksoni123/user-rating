import { useEffect } from "react";
import "./App.css";
import Header from "./header";
import ProductList from "./dashboard/productList";
import { useApi } from "./ApiContext";
import Login from "./auth/login";
import Signup from "./auth/signup";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { setData, setOriginalData } = useApi();

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((products) => {
        setData(products);
        setOriginalData(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-4">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
