import { useState } from "react"


const UseStateExample3=()=>{
    const[fruits,setfruits]=useState(["banana","apple","mango"])
    const[newfruit,setNewFruit]=useState("")
    const addfruits=()=>{
        const newlist=[...fruits,newfruit]
        setfruits(newlist)
        setNewFruit("")
    }
    const deletefruit=(index)=>{
    if(fruits.length>0){
        const newlist=[...fruits]
                newlist.pop()
                setfruits(newlist)


    }
  
    }
   
    return(
        <>

          <h1>Fruit Listing</h1>
      <input
        type="text"
        value={newfruit}
        onChange={(e) => setNewFruit(e.target.value)}
        placeholder="Enter new fruit"
      /> 
        <button onClick={addfruits}>Add fruits</button>
        <button onClick={deletefruit}>delete fruits</button>
        <ol>
            {
                fruits.map((eachfruit,index)=><li key={index}>{eachfruit}</li>)
            }
        </ol>
        </>
    )
}
export default UseStateExample3;


