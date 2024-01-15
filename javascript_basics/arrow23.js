// const user ={
//     username: "Shubham",
//     price:1999,
// // this refers to the current context
//     welcomeMessage: function(){
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this);
//     }
// }    
// // user.welcomeMessage()
// // user.username= "chris"
// // user.welcomeMessage()

// console.log(this);// its shows empty,because current glovbal environment does not
// // have any object.

// function tea (){
//     let username ="shubham"
//     console.log(this.username); 
// }
// we cant use this to access values inside a function unlike an object
// tea()

// const hello = () => {
//     let username = "Shubham"
//     console.log(this);
// }
// hello()

const add = (num1, num2) => { // arrow function (Explicit return)
   return num1+num2;
}
console.log(add(4,5));
// if variables are wrapped in curly braces,then we must write return keyword
const add2 = (num1,num2) => num1 + num2 // Implicit return
const add3 = (num1,num2) => (num1 + num2) // Implicit return
console.log(add2(4,4))

const addtwo =(num1, num2)=> ({username: "Shubham"})
console.log(addtwo(4,6));

// for running an object inside an arrow function, we must declare object inside parenthesis.
