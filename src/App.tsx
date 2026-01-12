import { useEffect } from "react";
import "./App.css";
import { useApi } from "./ApiContext";
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
