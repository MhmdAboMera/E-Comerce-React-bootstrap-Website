import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk(
  "productsSlice/fetchProduct",
  async (productId) => {
    const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const data = await res.json();
    return data;
  }
);
export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  }
);
const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      return [action.payload];
    });
  },
});
export const {} = productsSlice.actions;
export default productsSlice.reducer;
