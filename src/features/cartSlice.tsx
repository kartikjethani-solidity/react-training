import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import productData from "../productData";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction) => {
      state.cart.push(action.payload); //cart wale array mein item ki value push ho jaegi
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
