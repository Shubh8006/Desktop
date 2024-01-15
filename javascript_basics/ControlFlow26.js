//******** control Flow or Logic Flow *******

1. // IF Statment
const isUserLoggedIn=true
if(6!=2){
    // console.log("not equal");
 }
if(4=="2"){
    // console.log("Executed");
}
if (2==="2") {
    // console.log("yes");
}
// const temperature =45
// if(temperature===41){
//     console.log("its very hot");
// }
// else{
//     console.log("its mannagable");
// }


// <, >, <=, >=, ==, !=, ===, !==
// === This is called strict equal or triple equal, which is used to check the comparison
// of data types as well as the values.

const score =500
if(score > 100){
    var power ="Fly"
    // console.log(`user power: ${power}`);
}
// // here by taking var as variable, its scope changes to global, which is not efficient.
// console.log(`user power: ${power}`);

// const balance = 1000
// if(balance > 500) console.log("okay");

// if (balance<500){
//     console.log("not good");
// }else if(balance<600){
//     console.log("Insufficent"); 
// }else{
//     console.log("Amount is proper");
// }


const userloggedin = true
const debitCard = true 

if (userloggedin && debitCard){
    console.log("elgible");
}
const city = "delhi"
const dob = 1998
const sc = "gh"
if(city || sc){
    console.log("trust him");
}