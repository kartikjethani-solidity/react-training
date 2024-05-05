// reducers/index.ts

import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";

const rootReducer = combineReducers({
  counterReducer,
  // Add more reducers if you have
});

export default rootReducer;
