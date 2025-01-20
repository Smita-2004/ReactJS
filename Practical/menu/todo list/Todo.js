import React, { useState, useEffect } from 'react';

function Todo() {
  const [items, setItems] = useState([]); // State to manage the list of items
  const [newItem, setNewItem] = useState(''); // State to handle the input for a new item

  // Lifecycle methods using useEffect
  useEffect(() => {
    console.log('TodoList component mounted');
    return () => {
      console.log('TodoList component unmounted');
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  // Handle input changes
  const handleInputChange = (e) => {
    setNewItem(e.target.value);
  };

  // Add a new item to the list
  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]); // Add the new item to the list
      setNewItem(''); // Clear the input field
    }
  };

  // Delete an item from the list
  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems); // Update the list without the deleted item
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newItem}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        style={{ padding: '8px', width: '70%' }}
      />
      <button onClick={handleAddItem} style={{ padding: '8px', marginLeft: '8px' }}>
        Add
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {items.map((item, index) => (
          <li key={index} style={{ margin: '8px 0' }}>
            {item}
            <button
              onClick={() => handleDeleteItem(index)}
              style={{
                marginLeft: '12px',
                padding: '4px 8px',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
