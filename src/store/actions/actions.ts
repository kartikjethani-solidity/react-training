import { Dispatch } from "redux";
import { INCREMENT, DECREMENT, UPDATE_USER } from "../types";

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const updateUser = (userId: string) => ({
  type: UPDATE_USER,
  payload: userId,
});

export const fetchUserByIdThunk =
  (userId: string) => async (dispatch: Dispatch) => {
    console.log(111, { userId });
    const response = await fetch(`http://localhost:3000/users/todo/${userId}`);
    const name = "kartik";
    dispatch(updateUser(name));
  };
