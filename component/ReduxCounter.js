import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { INCREMENT,DECREMENT } from '../store'
const ReduxCounter = () => {
    const count = useSelector((state)=>state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> dispatch({type:INCREMENT})}>INCREMENT</button>
        <button onClick={()=>{dispatch({type:DECREMENT})}}>DECREMENT</button>
    </div>
  )
}

export default ReduxCounter
