import { useState } from "react";
import Product from "./product";
import { useApi } from "../ApiContext";

function ProductListing() {
  const [search, setSearch] = useState("");
  const { data, setData, originalData } = useApi();

  const handleSearch = (value: string) => {
    setSearch(value);
    if (!originalData) return;
    if (value.trim() === "") {
      setData(originalData);
      return;
    }
    const filtered = originalData.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setData(filtered);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div>
        <input
          type="text"
          placeholder="Search product..."
          className="border p-2 rounded w-56 mb-4"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div>
        <Product />
      </div>
    </div>
  );
}

export default ProductListing;
