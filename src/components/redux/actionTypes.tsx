// actionTypes.ts
export const CART_FETCH_REQUEST = 'CART_FETCH_REQUEST';
export const CART_FETCH_SUCCESS = 'CART_FETCH_SUCCESS';
export const CART_FETCH_FAIL = 'CART_FETCH_FAIL';

// actionTypes.d.ts
export interface CartFetchRequestAction {
  type: typeof CART_FETCH_REQUEST;
}

export interface CartFetchSuccessAction {
  type: typeof CART_FETCH_SUCCESS;
  payload: Restaurant[];
}

export interface CartFetchFailAction {
  type: typeof CART_FETCH_FAIL;
  payload: string;
}

export type CartActionTypes = 
  | CartFetchRequestAction 
  | CartFetchSuccessAction 
  | CartFetchFailAction;
