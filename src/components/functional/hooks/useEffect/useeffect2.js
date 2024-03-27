import { useEffect, useState } from "react"
import React from "react"
import Spinner from "../../spinners/spinner"
import axios from "axios"



const UseEffectex2=()=>{
   const[products,setproducts]=useState([])
   useEffect(()=>{

    axios.get("https://fakestoreapi.com/products")

    .then((response)=>{
        if(response.status===200){
            setproducts(response.data)
        }
        else{
            alert("something went wrong")
        }
    })
   },[])
    return(
        <>
        <h1>use effect example</h1>
        {
            products.length>0
            ?
            products.map((eachObject)=>{
                return(
                    <>
                    <h2>{eachObject.title}</h2>
                    <img src={eachObject.image} width={200} height={200}/>
                    </>
                )
            })
            :
            <Spinner/>
        }
        </>
    )
}
export default UseEffectex2;