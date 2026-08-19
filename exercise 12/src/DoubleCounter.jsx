import { useReducer } from "react";

const initialState = {
  counterA: 0,
  counterB: 0,
};
const Reducer = (state, action) => {
  switch (action.type) {
    case "increment_A":
      return { ...state, counterA: state.counterA + 1 };
    case "decrement_B":
      return {
        ...state,
        counterA: counterB > 0 ? state.counterA - 1 : 0,
      };

    case "increment_B":
      return { ...state, counterB: state.counterB + 1 };
    case "decrement_B":
      return {
        ...state,
        counterB: counterB > 0 ? state.counterB - 1 : 0,
      };
    case "RESET_ALL":
      return initialState;
    default:
      return state;
  }
};
const DoubleCounter = () => {
  const [state, disptch] = useReducer(Reducer, initialState);

  return (
    <div>
      <h2>Double Counter</h2>
      <div>
        {/* counter A */}
        <h3>Counter A: {state.counterA}</h3>
        <button
          onClick={() => disptch({ type: "decrement_A" })}
          disabled={state.counterA === 0}
        >
          -A
        </button>
        <button onClick={() => disptch({ type: "increment_A" })}>+A</button>
      </div>
      <div>
        {/* counter B */}
        <h3>Counter B: {state.counterB}</h3>

        <button
          onClick={() => disptch({ type: "decrement_B" })}
          disabled={state.counterA === 0}
        >
          -B
        </button>
        <button onClick={() => disptch({ type: "increment_B" })}>+B</button>
      </div>
      <div>
        <button onClick={()=> disptch({ type: "RESET_ALL" })}>
          Reset oth
        </button>
      </div>
    </div>
  );
};
export default DoubleCounter;
