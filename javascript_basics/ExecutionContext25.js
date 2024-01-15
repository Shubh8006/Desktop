// //  ***** Javascript Execution context  ***** : It is of two types
// //  Global Execution Context: "this" contains GEC
// // in browser,this value = window object.
// // Function Execution Context: 
// // Ecval Execution Context(not used very much in industry)

// // a code eof javascript is run in 2 phases:
// //1.Memory creation phase
// //2.Execution phase

// //example of a code to understand functioning of javascript
// let val1=10
// let val2=5
// function addnum(num1,num2){
// let total = num1 + num2
// return total
// }
// let result1 = addnum(val1, val2)
// let result2 =addnum(10, 2)
// console.log(result2);
// //step1: firstly, code is executed in global execution phase and it is assigned in"this"


// //step 2:memory phase= all variables are placed and assigned undefined value in it
// // val1= undefined
// // val2=undefined
// // addnum = defination
// // result1= undefined
// // result2=undefined
// // memory creation phase is completed and the process is called fetch cycle

// //step3:Execution phase=
// //val1 = 10
// //val2 = 2
// //addnum = a new variable enviorment and execution thread is created and both the 
// // memory creation and execution phase is repeated for the respective function
// //a.memory phase= val1:undefined, val2:undefined, total:undefined
// //b.executiopn phase= num1=10, num2=5, total =15

