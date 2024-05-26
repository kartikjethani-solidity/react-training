// rootReducer.ts
import { combineReducers } from 'redux';
import { cartReducer } from './reducers';
import { selectedRestaurantReducer } from './selectedRestaurantReducer';

export const rootReducer = combineReducers({
  cart: cartReducer,
  selectedRestaurant: selectedRestaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
