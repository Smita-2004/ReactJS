import React, { useState, useEffect, createContext, useContext } from 'react';

// Create a ThemeContext to manage the theme state
const ThemeContext = createContext();

function App() {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState('light');

  // Log the counter value whenever it changes
  useEffect(() => {
    console.log(`Counter value: ${counter}`);
  }, [counter]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
        <button onClick={() => setCounter(counter - 1)}>Deccrement Counter</button>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

// A child component to demonstrate the use of useContext
function ChildComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme from Child</button>
    </div>
  );
}

export default App;
