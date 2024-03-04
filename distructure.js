


let obj={
    schollName:"srichaithanya tech",
    students:1000,
    campus:[
        {
            name:"kphb"
        },
        {
            name:",moosapet"
        }
    ],
    mainbranch:"secunderabad"
}
const {mainbranch,campus,students,schollName}=obj

console.log(students)

//output:1000

//for arrays

let arry=[1,2,3,4]
let [a,b,c,d]=arry
console.log(c)
//output:3

//for objects

let array=[
    {name:"a"},{name:"b",age:20}
]
let [e,f]=array
console.log(f)
console.log(f.age)

//output:{name:"b", age:20}
//output:20

