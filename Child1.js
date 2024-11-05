import React from "react";
import Child2 from "./Child2";
function Child1(){
    return (
        <>
        <p>Child1: This is the first child component</p>
        <Child2/>
        </>
    );
}
export default Child1;