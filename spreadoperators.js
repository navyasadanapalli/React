


let array=[1,2,3,4,5,6]
let [a,b,c,...remaining]=array
console.log(remaining)
//output:[4,5,6]

// shallow copy:child memory reference shared with parent

let obj={
    name:"a"
}
let newproperty=obj
newproperty["id"]=20

console.log(newproperty,obj)
//output:{name: 'a', id: 20}{name: 'a', id: 20}

// //deep copy: both are different references

let obj={
    name:"a"
}
let newproperty={...obj}
 newproperty["id"]=80
 console.log(newproperty,obj)
 //output: {name: 'a', id: 80}{name: 'a'}