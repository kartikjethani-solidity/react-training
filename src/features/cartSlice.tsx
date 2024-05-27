import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import productData from "../productData";

interface CartItem {
  id: number;
  quantity: number;
  price: number;
  title: string;
  img: any;
}

export interface CartState {
  cart: CartItem[];
  items: any;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload); //2 -------- yha state mein item ki value ko cart array mein push kr dega
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
