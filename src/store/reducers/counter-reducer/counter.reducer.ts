import { INCREMENT, DECREMENT } from "../../types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
  console.log(2);
  switch (action.type) {
    case INCREMENT:
      console.log(3);
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      console.log(4);
      return { ...state, count: state.count - 1 };
    default:
      console.log("default");
      return state;
  }
};
