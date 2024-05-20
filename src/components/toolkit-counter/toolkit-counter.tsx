import { FC, useEffect } from "react";
import { increment, decrement } from "../../toolkit-store/slices/counter-slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../toolkit-store";
import { fetchUserByIdThunk } from "../../toolkit-store/thunks/fetch-user-thunk/fetch-user.thunk";

type Props = {
  count: number;
};

export const ToolkitCounter: FC<Props> = () => {
  const dispatch = useDispatch();
  const useAppDispatch = () => useDispatch<AppDispatch>();
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchUserByIdThunk(2));
  }, []);

  const count = useSelector((state: RootState) => state.counter.count);

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
