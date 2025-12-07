import { useEffect } from "react";
import "./App.css";
import Header from "./header";
import ProductList from "./productList";
import { useApi } from "./ApiContext";

function App() {
  const { setData, setOriginalData } = useApi();

  useEffect(() => {
    fetch(
      "https://equalexperts.github.io/frontend-take-home-test-data/products.json"
    )
      .then((res) => res.json())
      .then((products) => {
        setData(products);
        setOriginalData(products);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8">
      <Header />
      <ProductList />
    </div>
  );
}

export default App;
