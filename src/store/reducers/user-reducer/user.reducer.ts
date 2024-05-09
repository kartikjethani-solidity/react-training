import { UPDATE_USER } from "../../types";

const initialState = {
  name: "",
};

export const userReducer = (state = initialState, action: any) => {
  console.log(22222, action);
  switch (action.type) {
    case UPDATE_USER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
