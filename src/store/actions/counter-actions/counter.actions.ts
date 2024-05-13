import {
  INCREMENT,
  DECREMENT,
  UPDATE_FILE_NAME,
  INCREMENT2,
  DIVIDE2,
} from "../../types";

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

export const increment2 = () => ({
  type: INCREMENT2,
});

export const divide2 = () => ({
  type: DIVIDE2,
});
