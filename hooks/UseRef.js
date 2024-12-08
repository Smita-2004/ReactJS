import React, { useEffect, useState, useRef } from "react";

const Useref = () => {  // it creates a mutable variable which will not re-render the component
  const [myData, setMyData] = useState("");
  const inputEle = useRef(null); // Define the input ref
  const count = useRef(0); // Define count as a useRef to persist between renders

  // Update count value on every render
  useEffect(() => {
    count.current = count.current + 1; // Increment count
  });

  const changeStyle = () => {
    if (inputEle.current) {
      inputEle.current.style.backgroundColor = "yellow"; // Change input style on click
    }
  };

  return (
    <>
      <input
        ref={inputEle}
        type="text"
        value={myData}
        onChange={(e) => setMyData(e.target.value)}
      />
      <button onClick={changeStyle}>Submit</button> 
      <p>The number of times rendered: {count.current}</p>
    </>
  );
};

export default Useref;
   