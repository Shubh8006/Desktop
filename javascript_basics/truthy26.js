const userEmail = "shubh@gmail"

if(userEmail=="kk"){
console.log("got user");
}else{
    // console.log("didn't got user");
}

const userEmail2 ="" // empty string regarded as false

if(userEmail2){
console.log("got user")
}else{
    // console.log("didn't got user");
}

const userEmail1 =[] // empty array regarded as true

if(userEmail1){
console.log("got user");
}else{
    console.log("didn't got user");
}

// **** Falsy Values ****
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "False", " ", [], {}, function(){}, 

// if(userEmail1.length===0){
//     console.log("Empty Array");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length===0){
console.log("empty obect");
}

//*******/ Nullish Coalescing Operator (??): null undefned *******
// it is used in situation, where we have more than one values or null coming frm database
let val1
val1 = 5 ?? 10
console.log(val1);
val1 = null ?? 10
console.log(val1);
val1 = undefined ?? 34
console.log(val1);
val1 = null ?? 23 ??90 // in case if two or more values are there, it will assign first value
console.log(val1);
// val1= 48 ?? 90
// console.log(val1);


// **** Ternary Operator ****
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Expensive") : console.log("Cheaper");