import { createStore, applyMiddleware, Store, compose } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers";

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
