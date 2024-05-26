// actionCreators.ts
import { Dispatch } from 'redux';
import { CART_FETCH_REQUEST, CART_FETCH_SUCCESS, CART_FETCH_FAIL, CartActionTypes, CartFetchRequestAction, CartFetchSuccessAction, CartFetchFailAction } from './actionTypes';

export const cartFetchRequest = (): CartFetchRequestAction => ({ type: CART_FETCH_REQUEST });

export const cartFetchSuccess = (cart: Restaurant[]): CartFetchSuccessAction => ({
  type: CART_FETCH_SUCCESS,
  payload: cart,
});

export const cartFetchFail = (error: string): CartFetchFailAction => ({
  type: CART_FETCH_FAIL,
  payload: error,
});


const fetchCart = () => {
  return (dispatch: Dispatch<CartActionTypes>) => {
    dispatch(cartFetchRequest());
    fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      .then(response => response.json())
      .then(jsonData => {
        const cart = jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        dispatch(cartFetchSuccess(cart));
      })
      .catch(error => {
        dispatch(cartFetchFail(error.toString()));
      });
  };
};

export default fetchCart;