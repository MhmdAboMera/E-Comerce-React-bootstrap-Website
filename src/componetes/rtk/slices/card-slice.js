import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  initialState: [],
  name: "cardSlice",
  reducers: {
    addToCard: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
      }
    },
    deleteFromCard: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});
export const { addToCard, deleteFromCard, clear } = cardSlice.actions;
export default cardSlice.reducer;
