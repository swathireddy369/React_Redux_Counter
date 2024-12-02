import { useState } from "react"
export default function Counter (){
    let [count,setCount] = useState(9)
    const increment = ()=>{
        count++;
        setCount(count)

    }
    const decrement = ()=>{
        count--;
        setCount(count)
        //happy

    }
    return <><p>the count is : {count}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button></>
}