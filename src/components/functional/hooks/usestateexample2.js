

import { useState } from "react"

const UseStateExample2=()=>{
    const[Timer,setTimer]=useState(100)
    const handleTimer=()=>{
        setInterval(()=>{
            setTimer(Time=>Time-1)
        },1000)
    }
    return(
        <>
        <h1>timer value {Timer}</h1>
        <button onClick={handleTimer}>set Timer</button>
        </>
    )
}
export default UseStateExample2;