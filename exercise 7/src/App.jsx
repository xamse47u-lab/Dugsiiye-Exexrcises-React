import { useState, useEffect } from "react";

function App() {
  const [initialTime, setInitialTime] = useState(60);
  const [timeLeft, setTimeLeft] = useState(60);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let timerId;
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  return (
    <>
      <h1>Countdown Timer</h1>
      <label>set time (seconds): </label>
      <input
        type="number"
        onChange={(e) => Number(e.target.value)}
        value={initialTime}
      />

      <p>time left:{timeLeft}seconds</p>

      <div>
        <button onClick={handleStart} disabled={isRunning || timeLeft === 0}>
          Start
        </button>
        <button onClick={handleStop} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default App;
