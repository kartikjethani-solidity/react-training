import { INCREMENT, DECREMENT, INCREMENT2, DIVIDE2 } from "../../types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INCREMENT2:
      return { ...state, count: state.count * 2 };
    case DIVIDE2:
      return { ...state, count: state.count / 2 };
    default:
      return state;
  }
};
