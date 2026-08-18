import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const increment = () => setCount(count + 1);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={decrement} disabled={count === 0}>
        {" "}
        decrement
      </button>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Counter;
