import { FC } from "react";
import { increment, decrement } from "../../toolkit-store/slices/counter-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../toolkit-store";

type Props = {
  count: number;
};

export const ToolkitCounter: FC<Props> = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        className="bg-red-300 mr-10"
        type="button"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="bg-red-300 mr-10"
        type="button"
      >
        Decrement
      </button>
    </div>
  );
};
