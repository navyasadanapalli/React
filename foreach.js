
array=[
    {
        name:"10kcoders1",
        location:"office1",
        },
        {
            name:"10kcoders2",
            location:"office2",
        },
        {
            name:"10kcoders3",
            location:"office3",
        },
]
// function iteration (array){
//     let newArry=array.forEach(eachValue=>{console.log(eachValue.name)})
//     console.log(newArry)
// }
// iteration(array)

// //output:
// // 10kcoders1
// // 10kcoders2
// // 10kcoders3
// // undefined 

// function iteration (array){
//     let=newarray=array.forEach(eachValue=>{return})
//         console.log(array)
//     }
// iteration(array)
// //output:evrey object will return 

function iteration (array){
    let newArry=array.forEach(eachValue=>{return eachValue.name})
    console.log(newArry)
}
iteration(array)
//undefined


