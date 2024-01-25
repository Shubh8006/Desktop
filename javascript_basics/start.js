// var const let
// variables and constants= both are used to store data in the code, variable changes but constant remains the same.
// hoisting= we can use variable before making it. variable and functions are hoisted which means there declaration is moved on the top of the code

// console.log(a)// here the value of a is un-defined,because due to the concept of hoisting, a move to the top of the code.

// var a=12// when a variable is not assigned, and we are using it, it comes in the category of not defined.

// Types in js= primitive nad reference(all bracket values are reference ones).
// any value which when copied,doesn't get copied in real, but the reference of its main
// value get passed is called reference value.  And the one whose real got copied is called primitive value

// var a = [12,13];
// var b = a;

// b.push(3);
// console.log(b.length);


// conditionals= if, else, else-if


// loops
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9 
// for(var i=0; i<11; i++){
//     console.log(i);
// }

// var a=12;
// while(condition){
// a++;
// }

// //function= when you can give any kind of name to your code and you can use that code with that name as many time as you can
// // functions mainly serves three purpose
// // 1.when you dont want to run code instantly,but in future
// // 2. when you want to reuse your code
// // 3.when you want to run your code everytime with different data


// function helobolo(){
//     console.log(hello); 
// }
// helobolo();

// function abcd(value){ // here a is a parameter
// console.log(value);
// }

// const show = new abcd(12);// arguments
// console.log(show);

// // Arrays = to store more than one value
//  var arr = [27, 535];

 // push pop shift unshift
//  var arr = [1,2,3,4,5]
// //  arr.push(8); // to add an extra member in the array
// //  arr.pop(); // to remove an member from the array
// //  arr.unshift(0); // to add an value in starting place of array
// //  arr.shift(); // to remove an value from starting place of array
//   arr.splice(2,2) // to remove a value from any random place from array here 2=index, 1=total no. of value to be removed.
//  console.log(arr);


//  // objects= to holfd the details of an individual in a key value pair
// // 1. blank object
// var a ={};

// //2. Filled obj
var a={
    age:34, 
  name:"Shubham",
  email:"shubh73@gmail.com",
  kaamkaro: function(){
    console.log('lucy is cute');
  } // method, because it is a function inside an object
}
console.log(a.name) 
console.log(a.kaamkaro());// to access value of object

//a.name="Shubham Tyagi"      