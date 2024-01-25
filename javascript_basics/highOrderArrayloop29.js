// // ***** For Of loop *****

// // ["", "", ""]
// // [{}, {}, {}]

// const are = [1,2,3,4,5]
// for (const num of are) {
//     // console.log(num);
// }

// const  greetings = "Hello-World"
// for (const greet of greetings) {         
//     if(greet== "-"){
//         console.log(`space is detected`);
//         break
//     }
//     // console.log(`Each char is : ${greet}`);
// }

// //  *** MAPS**** // map is an object which always stored unique value in the same order 
// // as you have given to them.

// const map = new Map()
// map.set("IN", "India")
// map.set("USA", "America")
// map.set("UK", "England")
// console.log(map);

// for (const [key, value] of map) {
// //    console.log(key, ":", value);
        
//     }


// // const myObj = {
// //     Game1 : "mario",
// //     Game2 : "pinball"

// // }
// // for (const [key, value] of myObj) {
// //     // console.log(key, ":", value);
// //  // objects cannot be iterated by using for of loops, maps can be iterated   
// // }


// // ***** for in loop ****


// const myobj1 = {
//     js: "javascript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by apple"
//  }
//  for (const key in myobj1) {
//   console.log(`${key} is shortcut for ${myobj1[key]}`);// to assign values in for-of loop
//   //we uses syntax as objectname[keys] as showed above
//  }

const programming = ["js", "C", "Ruby", "Pyhton"]
for (const key in programming) {
//  console.log(programming[key]);
 //one of the drawback of for in loop is, it prints keys of array unlike for of loop
}



const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("UK", "England")
map.set("IN", "India")
// map is not iterable, you wont get any result.
for (const key in map) {
 console.log(key);
}


//  ***** for each loop ****

const coding = ["eng", "maths", "science", "hindi"]
coding.forEach( function (item) {
    // console.log(item);
}) 
// function inside a for each loop does not have any name since it's a call back function

// by using a arrow function
coding.forEach( (item) => {
    // console.log(item);
})

function printme(item) {
    // console.log(item);
}
coding.forEach(printme)

coding.forEach( (item, index, arr)=>{
    console.log(item, index, arr);
})


const mycoding =[
    {
        lol: "java",
        file:"js"
    }, 
    {
        lol: "java",
        file:"js"
    },
    {
        lol: "java",
        file:"js"
    },
]

mycoding.forEach( (item) => {

    console.log(item.file);
})