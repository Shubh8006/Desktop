// javaScript and classes

// Yes, JavaScript does have classes. ECMAScript 6 (ES6), which was released in 2015,
//  introduced class syntax to the language. Prior to ES6, JavaScript used prototype-based 
//  inheritance, but the introduction of classes provided a more familiar and convenient
//   syntax for defining object-oriented structures.

// t's important to note that despite the class syntax, JavaScript still uses prototype-based 
// inheritance under the hood. Classes provide a more convenient way to work with prototypes 
// and create object-oriented code in a style similar to other programming languages.

// OOPS
// object : Collection of properties and methods i.e variables and methods.
// for ex- toLowerCase, promise etc 

// why use OOPS?
// to remove the problem of messy and sphagetti code.

// Parts of oops
// Object literals

// Constructor functions
// Prototypes
// Classes
// Instances(new, this)

// 4 pillars
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism              


//here we can see it is an object literal below, smallest unit in javaScript
// const user ={
//     username : 'Shubham',
//     loginCount : 8,
//     signedIn : true,
// getuserdetails : function(){
//     //console.log("Got user details from the database");
//      console.log(`Username is: ${this.username}`);// use of this keyword for current context.
//     return this;
// }


//   }

// console.log(user.username);
//  console.log(user.getuserdetails());
//  console.log(this);// here in node running environment, this keyword for global scope return
// an empty parenthesis, but when we console this in browser it returns a window object


// Constructor Function: it always provides you a new instance or copy to work with,in order
// to protect the code from overwriting.
// const promise = new Promise()
// const date = new Date() ///new keyword here is a constructor function

function user(username, logincount, isuserloggedin){
   this.username = username; // left hand side is variable
    this.logincount = logincount;
     this.isuserloggedin = isuserloggedin;

    this.greetings = function(){
        console.log(`Welcome: ${this.username}`);
    }
    
   return this // when the variables are accesing main function without a user keyword, then
//  // we need this keyword in return to access the value of the variables 
 }
const userone =  new user("shubham", 5, true)// here we are using new as constructor to acces
//original value of userone
 const usertwo =  new user("shubh", 10, false)

// console.log(userone.constructor);
console.log(usertwo);
console.log(user.greetings);
// console.log(userone instanceof user);



// new : step1; whenever we uses new keyword,an empty object is created which is called instance
// step2: A constructor function is called
//step3: all the arguments are injected in this constructor and given to the user 