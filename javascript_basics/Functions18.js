

function myname() {
   console.log("S");
   console.log("H");
   console.log("U");
   console.log("B");
   console.log("H");
   console.log("A");
   console.log("M");

}
// // myname()
// function addtwonumbers(number1, number2){
// return (number1 + number2);
// }
// console.log(addtwonumbers(3,"a"));

function addtwonumbers(number1, number2) {
   let result = number1+ number2
   return result
   // return number1 + number2
}
// const result = addtwonumbers(4, 6)
// console.log(result);

function loginmessage(username = "chris") {
   if (username === undefined) {
      console.log("plz enter a username");
      return
   }
    return `${username} just logged in`
}
// console.log(loginmessage());

function checkCartPrice(...num1) {  // ... it is called rest operator or spread operator
   return num1
}
// console.log(checkCartPrice(300, 400, 500));

const user = {
   username: "shubham",
   price: 2000
}

function handleobject(anyobject) {
   console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
handleobject({
   username : "chris",
    price:20004
})
const newarray = [100, 200, 300, 400]
function secondValue(getarray) {
   return getarray[2]
}
console.log(secondValue(newarray));
console.log(secondValue([1, 4, 7, 8]));