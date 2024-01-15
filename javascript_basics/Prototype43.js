// Every object in JavaScript has a built-in property, which is called its prototype. The
//  prototype is itself an object, so the prototype will have its own prototype, making
// what's called a prototype chain. The chain ends when we reach a prototype that has null
//    for its own prototype.

// When you try to access a property of an object: if the property can't be found in the object 
// itself, the prototype is searched for the property. If the property still can't be found, 
// then the prototype's prototype is searched, and so on until either the property is found, 
// or the end of the chain is reached, in which case undefined is returned.

// function mulby5 (num){
//     return num*5;
// }
// // // here we can sse that an function also has a property similar to the object i.e it got 
// // // its own prototype as well, hence object is the functional unit in javascript.
// mulby5.power= 4
// console.log(mulby5(6));
// console.log(mulby5.power);
// console.log(mulby5.prototype);





// function createuser(name, price){
//     this.name = name
//     this.price = price
// }
// // here this will work for anyone who calls it
// createuser.prototype.printme = function(){
//     console.log(`the price is: ${this.price}`);
//     return this
// }

// const chai = new createuser("tata", 50)
// const tea = new createuser("tajMahal", 100)
// chai.printme()
// //console.log(tea);


/*
Here's what happened behind the scene, when a new keyword is created in javaScript:

A new object is created: the new keyword initiates the creation of a javaScript objecct.

A prototype is linked: the newely created object gets linked to the prototype property of 
the constructor function.This mens that it has access to the properties and methods defined
on the constructor's prototype.

The contsructor is called: The constructor function is called with the specific arguments 
and this is bound to the newely craeted object. If no explicit return value is specified 
from the constructor, javaScript assume this newely craeted object, to be the intended
return value.

The new object is returned : After the construction function has been called, if it doesn't
return a non-primitive value(object, array, function etc.) the newly created object is
returned.
*/

//*** prototype ***

// let myName = "Shubham    "
// let myChannel = "chai    "
// console.log(myName.trueLength);


// let myHero =["vison", "wanda"]

// let heropower ={
//     vision : "Telepathy",
//     wanda : "Magician",
//     getwandapower : function(){
//      console.log(`wanda's power is of a ${this.wanda}`);
     
//     }
  
// }

// Object.prototype.shubh = function(){
//     console.log("shubh is great");
// }

// Array.prototype.heyshubh = function(){
//     console.log("Shubh is everywhere");
// }
// //myHero.heyshubh()


// //heropower.shubh()
// // console.log(heropower.getwandapower());

 
//  myHero.heyshubh()
 //heropower.heyshubh()


// //*** prototypal Inheritance ***


// const student = {
// name: "shubh",
// email: "chai@gmail.com"
// }

// const teacher = {
//     makeVedio: true,

// }

// const teachingHelper = {
//     isAvailable: false,
// }
 
// const TAsupport = {
//     makeAssignment : "Js",
//     type: 'Full time',
//     __proto__: teachingHelper
// }

// teacher.__proto__ = student

// // Modern syntax of Inheritance

// Object.setPrototypeOf(teachingHelper, teacher)


// // string wale pehle question ka answer yaha h

// let username = "Shubham    "

// String.prototype.trueLength = function(){
//     console.log(`${this}`);
//     console.log(`True length is : ${this.trim().length}`);
// }
// username.trueLength()
