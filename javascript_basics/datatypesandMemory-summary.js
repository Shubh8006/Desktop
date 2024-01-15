// primitive data type = 7 types
// String, Number, Boolean , Undefined, null, Symbol, BigInt

// javascript is dynamically typed language,beacuse data type is auttomatically assigned at the 
// timeof code execution


// const temp = null
// const id = Symbol('345') // example of symbol type
// const id2 = Symbol('345')
// console.log(id === id2);

// const bigNumber = 128694661269821469824698n // big int type
// console.log(bigNumber);


// Reference type or non primitive 
// arrays, objects, functions


const shoes = ["puma", "nike", "adidas"] // array

let myobj = {       // all data inside curly brackets is called objects
    name: "Shubham",
    age: 23, 
    hobby: "music",
}

const myFunction = function () {
    console.log("Hello world");
}

// console.log(typeof shoes);



// Memories are of two types= Stack and Heap memory.
// Stack(used in primitive type),  Heap(used in non-primitive type)


let myDogName = "Dollar"

let firstDogName = myDogName
firstDogName = "Mafia"
console.log(myDogName); // in stack memory, when we assigned the same value in a variable to the
// // another variable, then a copy value of that first variable is assigned to the second variable and 
// // if any kind of change is made to the value of second variable, then its original value remains same 
// // and the copy value changes
console.log(firstDogName);


let userone ={
    name: "shubham tyagi",
    city: "haridwar",
}
// } // In case of heap memory, the refernce of a variable is assigned in the heap and if any another 
// // variable ask for the same value as the first variable, then the original reference is assigned to
// // the second variable unlike copy in stack, so if any kind of changes is made to the second variable
// //it also applies to both of them.

let usertwo = userone

usertwo.city = "jaipur"
console.log(userone.city);
console.log(usertwo.city);