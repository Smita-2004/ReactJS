// import React, { useState, useMemo } from 'react';

// function Usememo() {
//     const [add, setAdd] = useState(0);
//     const [minus, setMinus] = useState(30);

//     const multiplication=useMemo (function multiply(){
//         console.log("hdfjafkbckjdfkjf")
//         return add*10;
//     },[add])

//   return (
//         <>
//          {multiplication}
//          <br/>
//          <button>Counter</button>
//         <br></br>
//             <button onClick={() => setAdd(add + 1)}>Addition</button>
//             <span>{add}</span>
//             <br/>
//             <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
//             {minus}
//         </>
//     );
// }

// export default Usememo;



import React, { useState, useMemo } from 'react';

function Usememo() {
    const [myName, setMyNum] = useState(0);
    const [show, setShow] = useState(true);

    const getValue = ()=>{
        return setMyNum(myNum+1);
    };
    const  countNumber = (num)=>{
        console.log("abcdefghijklmop",num);
        for(let i=0; i<=1000000;i++){}
        return num;
    };
    const checkData= countNumber(myNum)

    // const checkData= useMemo(()=>{
    //     return countNumber{myNum};
    // },[myNum]);

  return (
        <>
            <button onClick={getValue} style={{background: "red"}}>Counter</button>
            <p>My new Number: {checkData}</p>
            <button onClick={()=>setShow(!show)}>
                {show ? "You clicked Me": "Click me plz"}
            </button>
        </>
    );
}

export default Usememo;
