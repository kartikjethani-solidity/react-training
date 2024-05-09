import { UPDATE_USER } from "../../types";

const initialState = {
  name: "",
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
