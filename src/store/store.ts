import { createStore, applyMiddleware, Store } from "redux";
import { thunk } from "redux-thunk"; // Optional: for async actions
import rootReducer from "./reducers"; // Import your root reducer

const store: Store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
