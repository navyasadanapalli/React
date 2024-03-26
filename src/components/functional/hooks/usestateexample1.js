import { useState } from "react"

const UseStateExample1=()=>{
    const[Counter,setCounter]=useState(0)
    //function for handle the count
    const handleChange=(value)=>{
        switch (value){
            case "increment":
                setCounter(Counter+1)
            break
            case "decrement":
                setCounter(Counter-1)
            break
            case "reset":
                setCounter(0)
            break
             default:
        }
    }

    
    return(
        <>
        <h1>Current counter value {Counter}</h1>
        <button onClick={()=>handleChange("increment")}>increment</button>
        <button onClick={()=>handleChange("decrement")}>decrement</button>
        <button onClick={()=>handleChange("reset")}>reset</button>


        </>
    )
}
export default UseStateExample1;