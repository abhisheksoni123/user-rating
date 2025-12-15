import { createContext, useContext, useState, type ReactNode } from "react";

export interface Product {
  id: number;
  _id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  totalCustomer: number;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

// If API returns an array:
export type ProductsResponse = Product[];

export interface ApiContextType {
  data: ProductsResponse | null; // filtered list
  originalData: ProductsResponse | null; // full list
  setData: (value: ProductsResponse | null) => void;
  setOriginalData: (value: ProductsResponse | null) => void;
}

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const ApiProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<ProductsResponse | null>(null);
  const [originalData, setOriginalData] = useState<ProductsResponse | null>(
    null
  );

  return (
    <ApiContext.Provider
      value={{ data, originalData, setData, setOriginalData }}
    >
      {children}
    </ApiContext.Provider>
  );
};

// custom hook
export const useApi = () => {
  const ctx = useContext(ApiContext);
  if (!ctx) throw new Error("useApi must be used inside ApiProvider");
  return ctx;
};
