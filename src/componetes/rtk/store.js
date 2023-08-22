import { configureStore } from "@reduxjs/toolkit";
import productsClice from "./slices/products-clice";
import cardSlice from "./slices/card-slice";
import categoriesSlice from "./slices/categories-slice";

export const store = configureStore({
  reducer: {
    products: productsClice,
    card: cardSlice,
    categories: categoriesSlice,
  },
});
