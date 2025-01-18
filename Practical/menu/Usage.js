import React from 'react';
import Menu from './Menu';

function App() {
  const foodItems = [
    { type: 'pizza', name: 'Pepperoni' },
    { type: 'burger', name: 'Cheeseburger' },
    { type: 'salad', name: 'Caesar Salad' },
    { type: 'sushi', name: 'Dragon Roll' } // Unknown type
  ];

  return (
    <div>
      <h1>Food Menu</h1>
      <Menu items={foodItems} />
    </div>
  );
}

export default App;
