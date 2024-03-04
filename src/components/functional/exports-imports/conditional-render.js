const ConditionalRender=()=>{
    let arrayOfObjects=[
        {
            name:"kiran",
            marks:37,
            id:1
        },
        {
            name:"antony",
            marks:70,
            id:2
        },
        {
            name:"praveen",
            marks:90,
            id:3
        },
        {
            name:"akhila",
            marks:83,
            id:4
        },
        {
            name:"divya",
            marks:50,
            id:5
        }
    ]

    return(
        <div>
            {
                arrayOfObjects.map((eachObject)=>{
                    const {marks,name,id}=eachObject
                    return(
                        <div key={id}>
                            <h4>{eachObject.name}</h4>
                            <h5>marks obtained{eachObject.marks}</h5>
                            {
                                marks>90? <h5>secured grade A+</h5>:marks>80? <h5>secured grade A</h5>:marks>60?<h5>secured grade B+</h5>:marks>40?<h5>secured grade C</h5>:<h5>Better luck nex time, you are near to goal</h5>
                            }
                            <div style={{width:"30%",height:2,background:"red"}}/> 

                        </div>
                    )

                })
            }
        </div>
    )
}

export default ConditionalRender