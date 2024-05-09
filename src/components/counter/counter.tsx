import React, { useEffect } from "react";
import { connect } from "react-redux";
import { increment, decrement, fetchUserByIdThunk } from "../../store/actions";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
  fetchUserById: (userId: string) => void;
}

const Counter: React.FC<CounterProps> = ({
  count,
  increment,
  decrement,
  fetchUserById,
}) => {
  useEffect(() => {
    fetchUserById("123");
  }, [fetchUserById]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button
        className="mt-10 pointer-events-auto rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500"
        onClick={increment}
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

const mapStateToProps = (state: any) => ({
  count: state.counter.count,
});

const mapDispatchToProps = (dispatch: any) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  fetchUserById: (userId: string) => dispatch(fetchUserByIdThunk(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
