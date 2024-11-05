import React, { useState } from 'react';

const Addition = () => {
    
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [sum, setSum] = useState(null);


    const handleAddition = () => {
        
        const total = parseFloat(num1) + parseFloat(num2);
        setSum(total);
    };
  
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h2>Add Two Numbers</h2>
            <div>
                <input
                    type="number"
                    placeholder="Enter first number"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    style={{ margin: '10px' }}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Enter second number"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    style={{ margin: '10px' }}
                />
            </div>
            <button onClick={handleAddition} style={{ margin: '10px' }}>Add</button>
            
            {sum !== null && <h3>Result: {sum}</h3>}
        </div>
    );
};

export default Addition;
