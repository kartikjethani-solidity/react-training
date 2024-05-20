import { UPDATE_FILE_NAME, UPDATE_FILE_EXTENSION } from "../../types";

const initialState = {
  name: "",
  extension: "",
};

type Action = {
  type: string;
  payload: string;
};

export const fileReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case UPDATE_FILE_NAME:
      return { ...state, name: action.payload };
    case UPDATE_FILE_EXTENSION:
      return { ...state, extension: action.payload };
    default:
      return state;
  }
};
