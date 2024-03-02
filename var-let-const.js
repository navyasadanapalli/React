
// var:

function iteration(){
    for(var i=0;i<10;i++){
        console.log(i)
    }
    console.log(i)
}
iteration()
// output: 1 to 9
// output:10


let:

function iteration(){
    for(let i=0;i<10;i++){
        console.log(i)
    }
    console.log(i)
}
iteration()
//output: 1 to 9
//output: error


//const
function iteration(){
    for(const i=0;i<10;i++){
        console.log(i)
    }
}
iteration()

// output: error



















