import { useState } from "react"


const UseStateExample3=()=>{
    const[fruits,setfruits]=useState(["banana","apple","mango"])
    const addfruits=()=>{
        const newlist=[...fruits,"new fruits"]
        setfruits(newlist)
    }
   
    return(
        <>
        <h1>fruit listing</h1>
        <button onClick={addfruits}>Add fruits</button>
        <ol>
            {
                fruits.map((eachfruit,index)=><li key={index}>{eachfruit}</li>)
            }
        </ol>
        </>
    )
}
export default UseStateExample3;