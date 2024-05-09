import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import {
  incrementCounterByOne,
  decrement,
  fetchUserByIdThunk,
} from "../../store/actions";
import { RootState } from "../../store";

type CounterProps = {
  count: number;
  incrementCounter: () => void;
  decrement: () => void;
  fetchUserById: (userId: string) => void;
};

// type UserProps = {
//   name: string;
//   updateName: (name: string) => void;
// };

// const User: FC<UserProps> = ({ name }) => {
//   return <h2>My name is {name}</h2>;
// };

// <User name={"Kartik"} updateName={() => {}} />;

const Counter: React.FC<CounterProps> = ({
  count,
  incrementCounter,
  decrement,
  fetchUserById,
}) => {
  // useEffect(() => {
  //   fetchUserById("123");
  // }, [fetchUserById]);

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
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  incrementCounter: () => dispatch(incrementCounterByOne()),
  decrement: () => dispatch(decrement()),
  fetchUserById: (userId: string) => dispatch(fetchUserByIdThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
