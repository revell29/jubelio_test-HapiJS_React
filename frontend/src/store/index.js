import { createContext, useContext } from "react";
import ProductStore from "./product";

export const store = {
  productStore: new ProductStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext);
};
