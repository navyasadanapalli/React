array=[
    {
        name:"10kcoders1",
        location:"office1",
        distance:10,
        },
        {
            name:"10kcoders2",
            location:"office2",
            distance:20,
        },
        {
            name:"10kcoders3",
            location:"office3",
            distance:30,
        },
        {
            name:"10kcoders1",
            location:"office1",
            distance:100,
            },
            {
                name:"10kcoders2",
                location:"office2",
                distance:88,
            },
            {
                name:"10kcoders3",
                location:"office3",
                distance:300,
            },
            {
                name:"10kcoders3",
                location:"office3",
                distance:0,
            },
]


// function iteration (array){
//     let newarray=array.filter(eachValue=>{return eachValue.distance<50})
//     console.log(newarray);
// }
// iteration(array)


// // output
// // {name: '10kcoders1', location: 'office1', distance: 10} 
// // {name: '10kcoders2', location: 'office2', distance: 20}
// // {name: '10kcoders3', location: 'office3', distance: 30}
// // {name: '10kcoders3', location: 'office3', distance: 0}


function iteration(array){
    let newarray=array.filter(eachValue=>{return eachValue.distance<50 || eachValue.distance})
    console.log(newarray)
}
iteration(array)