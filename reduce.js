let CartItem=[
    {
        productName:"bag",
        price:10,
        qnty:1
    },
    {
        productName:"apple bag",
        price:10,
        qnty:3
    },
    {
        productName:"laptop bag",
        price:110,
        qnty:1
    },
    {
        productName:"samsung bag",
        price:200,
        qnty:1
    },
    {
        productName:"oppo bag",
        price:10,
        qnty:2
    },
]

// function iteration(CartItem){
//    let initialValue=0
// let totalCost=CartItem.reduce((a,b)=>{return a+(b.price)},initialValue)
//  console.log(totalCost);
// }
// iteration(CartItem)

// // //output:340


// //----------------------------------------------------------------------------------------------


// function iteration(CartItem){
//     let CurrentValue=0
//     let totalCost=CartItem.reduce((a,b)=>{return a+b.price*b.qnty},CurrentValue)
//     console.log(totalCost)

//     // return totalCost
// }
// iteration(CartItem)

// // const result=totalCost(CartItem)
// // console.log(result)


// // //output:370

//discount

function totalCost(CartItem){
let totalCost = CartItem.reduce((a,b)=>{return a+(b.price*b.qnty)},0)
return totalCost
}

function discountedPrice(totalPrice,percentage){
    return(totalPrice*(100-percentage))/100
}
const withoutDiscount=totalCost(CartItem)
console.log(withoutDiscount,"withoutDiscount")
let percentagediscount=10

const finalpricediscount=discountedPrice(withoutDiscount,percentagediscount)

console.log(finalpricediscount,"with discount")
console.log(`you saved total ${withoutDiscount-finalpricediscount} rupees`)


//output:
// 370 'withoutDiscount'
// 333 'with discount'
// you saved total 37 rupees

