import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
import { userReducer } from "./user-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  // Add more reducers if you have
});

export default rootReducer;
