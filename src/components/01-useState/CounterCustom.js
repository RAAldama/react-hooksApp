import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./CounterApp.css";

const CounterCustom = () => {
  const { state, increase, decrease, reset } = useCounter(100);

  return (
    <>
      <h1>Counter with Hook: {state}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increase(2)}>
        +2
      </button>

      <button className="btn btn-info" onClick={reset}>
        Reset
      </button>

      <button className="btn btn-primary" onClick={() => decrease(2)}>
        -2
      </button>
    </>
  );
};

export default CounterCustom;
