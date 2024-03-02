// map:

// without map
// const array = [1,2,3,4]
// let array2=[]

// for(let i=0;i<array.length;i++){
//     array2.push(array[i]*array[i])
// }
// console.log(array2);

//output:[1,4,9,16]


//with map

// const arry=[1,2,3,4]

// function iteration(arry){
//   let newArry= arry.map(eachValue=>eachValue*eachValue)
//   console.log(newArry)
// }
// iteration(arry)

// //output:[1,4,9,16]



// const array=[1,2,3,]
// function iteration(array){
// let newArry=array.map(eachValue=>{return 0})
// console.log(newArry)
// }
// iteration(array)

// //output:[0,0,0]


// const array=[1,2,3,]
// function iteration(array){
// let newArry=array.map(eachValue=>{return})
// console.log(newArry)
// }
// iteration(array)

// // output:[undefined,undefined,undefined]

const array=[
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

function iteration(array){
    let newArry=array.map(eachValue=>{return eachValue.name})
    console.log(newArry);
}
iteration(array)

// output: ['10kcoders1', '10kcoders2', '10kcoders3']


function iteration(array){
    let newArry=array.map(eachValue=>{return eachValue.name}).reverse()
    console.log(newArry);
}
iteration(array)
//output:['10kcoders3', '10kcoders2', '10kcoders1']



