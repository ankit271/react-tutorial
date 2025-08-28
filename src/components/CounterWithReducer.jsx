import React, { useReducer } from "react";

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div className="p-4">
      <h2>Count: {state.count}</h2>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="bg-green-500 text-white px-3 py-1 rounded"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="bg-orange-500 text-white px-3 py-1 rounded ml-2"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "reset" })}
        className="bg-gray-500 text-white px-3 py-1 rounded ml-2"
      >
        Reset
      </button>
    </div>
  );
}

export default CounterWithReducer;
