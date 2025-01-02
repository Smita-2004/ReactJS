import React ,{useCallback,useState} from "react";
import Usechild from './UseChild';
const useCallback=()=>{
    const[count,setCount]=useState(0);

    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        if(count >0){
            setCount(count - 1);
        }
    };
}   