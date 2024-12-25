import React, { useState, useEffect } from 'react';

function CounterApp() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(`Counter value is now: ${counter}`);
  }, [counter]);  

  const increment = () => {
    setCounter(counter + 1); 
  };

  const decrement = () => {
    setCounter(counter - 1); 
    };

  return (
    <div >
      <h1>Simple Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default CounterApp;
