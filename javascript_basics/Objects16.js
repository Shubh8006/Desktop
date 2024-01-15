// Singleton = when declaring an object as a constructor.
Object.create
const mysym = Symbol("yes you are")
// Object Literals
const user = {
    name: "Shubham",
    "Sex": "Male",
    [mysym]: "yes you are", // syntax for declaring symbol
    age: 23,
    location: "Delhi",
    email:"shubham@google.com",
    isLoggedIn: true,
    LastLoginDays:["Monday", "Tuesday"]
}

// console.log(user.email)
//  console.log(user["age"]);
//  console.log(user['Sex']);
   
// console.log(user[mysym]);

// user.age = 21 // for changing the value of the objects
// console.log(user.age);
// Object.freeze(user) // for freezing the values of the object
// user.age=30
// console.log(user);

// user.greetings = function (){
//     console.log("Hello user");
// }
// console.log(user.greetings());

user.greetings2 = function (){
    console.log(`Hello user, ${this.name}`);
}
console.log(user.greetings2());












































user.greetings = function name(params) {
    console.log("hello user");
}
    



      
  