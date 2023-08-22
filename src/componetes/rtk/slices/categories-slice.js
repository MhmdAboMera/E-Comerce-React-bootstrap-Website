import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchcategories = createAsyncThunk(
  "categoriesSlice/fetchcategories",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    return data;
  }
);
export const fetchcategory = createAsyncThunk(
  "categoriesSlice/fetchcategory",
  async (categoryName) => {
    const res = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    const data = await res.json();
    return data;
  }
);

export const categoriesSlice = createSlice({
  initialState: [],
  name: "categoriesSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchcategories.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchcategory.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = categoriesSlice.actions;
export default categoriesSlice.reducer;
