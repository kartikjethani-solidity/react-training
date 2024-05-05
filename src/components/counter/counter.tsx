import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../../store/actions";

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ count, increment, decrement }) => {
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
  count: state.counterReducer.count,
});

export default connect(mapStateToProps, { increment, decrement })(Counter);
