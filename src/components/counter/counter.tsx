import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserByIdThunk } from "../../store/actions";
import { RootState } from "../../store";
import {
  increment2,
  decrement,
  increment,
  divide2,
} from "../../store/actions/counter-actions/counter.actions";

type CounterProps = {
  count: number;
  incrementCounter: () => void;
  decrement: () => void;
  fetchUserById: (userId: string) => void;
  increment2: () => void;
  divide2: () => void;
};

const Counter: React.FC<CounterProps> = ({
  count,
  incrementCounter,
  decrement,
  fetchUserById,
  increment2,
  divide2,
}) => {
  return (
    <div>
      <h2>Counter current value: {count}</h2>
      <button
        className="mt-10 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={incrementCounter}
      >
        Increment
      </button>
      <button
        className="ml-10 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={decrement}
      >
        Decrement
      </button>
      <div>
        <button
          className="mt-4 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          onClick={increment2}
        >
          Multiply by 2
        </button>
        <button
          className="ml-10 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
          onClick={divide2}
        >
          Divide by 2
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementCounter: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  fetchUserById: (userId: string) => dispatch(fetchUserByIdThunk(userId)),
  increment2: () => dispatch(increment2()),
  divide2: () => dispatch(divide2()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
