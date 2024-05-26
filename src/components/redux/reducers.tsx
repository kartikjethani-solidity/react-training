// reducers.ts
import { CART_FETCH_REQUEST, CART_FETCH_SUCCESS, CART_FETCH_FAIL, CartActionTypes } from './actionTypes';

interface CartState {
  loading: boolean;
  cart: Restaurant[];
  error: string | null;
}

const initialState: CartState = {
  loading: false,
  cart: [],
  error: null,
};

export const cartReducer = (state = initialState, action: CartActionTypes): CartState => {
  switch (action.type) {
    case CART_FETCH_REQUEST:
      return { ...state, loading: true };
    case CART_FETCH_SUCCESS:
      return { ...state, loading: false, cart: action.payload };
    case CART_FETCH_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
