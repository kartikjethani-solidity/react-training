import { combineReducers } from "redux";
import { counterReducer } from "./counter-reducer";
import { userReducer } from "./user-reducer";
import { fileReducer } from "./file-reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  files: fileReducer,
  // Add more reducers if you have
});

export default rootReducer;
