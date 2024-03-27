import { useEffect, useState } from "react"





const UseExample1=()=>{

    const[count,setcount]=useState(0)

    useEffect(()=>{
        document.title=`current value ${count}`
        console.log("count")
        
    },[])
  
        return(
        <>
        <h1>use effect</h1>
        <h2>current count {count}</h2>
        <button onClick={()=>{setcount(count+1)}}>increment</button>
        </>
    )
}

export default UseExample1


