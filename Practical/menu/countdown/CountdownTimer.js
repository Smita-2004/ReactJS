import React, { useState, useEffect } from 'react';

function CountdownTimer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  // Effect to handle the countdown logic
  useEffect(() => {
    let timer;
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    // Cleanup the timer
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  // Start the countdown
  const handleStart = () => {
    if (seconds > 0) {
      setIsActive(true);
    }
  };

  // Reset the countdown
  const handleReset = () => {
    setSeconds(initialSeconds);
    setIsActive(false);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Countdown Timer</h1>
      <h2>{seconds}s</h2>
      <button onClick={handleStart} disabled={isActive || seconds === 0}>
        Start
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default CountdownTimer;
