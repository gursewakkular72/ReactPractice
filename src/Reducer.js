import React, { useReducer } from "react";

// intial value for the counter. Without the 'init' function this would be assinged to the counter otherwise, it would be the value returned by the init function.
let initialCount = 0;

/// reducer accepts two paramaters: the previous State of the counter and the actions object.
// the actions object is passed through the dispatch function
const reducer = (prevCount, actions) => {
  if (actions.type === "increment") {
    console.log("runs");
    return (prevCount = prevCount + 1);
  }
  if (actions.type === "decrement") {
    return (prevCount = prevCount - 1);
  }
};

// sets the initial value for the count. Otherwise it would be equivalent to what we have assigned to 'initalCount' at the top.
const init = () => {
  return 3;
};

export function Reducer(props) {
  const [count, dispatch] = useReducer(reducer, initialCount, init);

  const increaseCount = () => {
    dispatch({ type: "increment" });
  };

  const decreaseCount = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <button onClick={increaseCount}>+</button>
      <div>{count}</div>
      <button onClick={decreaseCount}>-</button>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// Log to console
// console.log('Hello console')
