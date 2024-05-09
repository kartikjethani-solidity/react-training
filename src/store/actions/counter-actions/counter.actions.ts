import { INCREMENT, DECREMENT, UPDATE_FILE_NAME } from "../../types";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const updateFileName = (fileName: string) => ({
  type: UPDATE_FILE_NAME,
  payload: fileName,
});
