// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed
// const promiseOne = new Promise(function(resolve, reject){
//     // do an async task
//     // database calls, crypto tasks, netwok calls.
//     setTimeout(function(){
//         console.log("Task is completed");
//         resolve()
//     }, 2000)
// })

// promiseOne.then(function(){
// console.log("promise consumed");
// })
// const promiseOne = new Promise((resolve, reject) => {                  
//     setTimeout(() => {
//         console.log("promse is made");
//         resolve()
//     }, 2000)
// })
// promiseOne.then(() =>{
//     console.log("promise is used");
//})


// new Promise((resolve, reject) => {
//     console.log("A promise is created");
//     resolve(); promise function without any variable
// }).then(() => {console.log("a promise is accepted")})


//resolve method with an object inside it
// const promiseThree = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve({username: "Shubham", Password : 8006})
//     },2000)  
// })
// promiseThree.then((user2)=>{console.log(user2)})


// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username :'Shubham', password : 8006})
//         }
//         else{
//             console.log("There is some error in the code");
//         }
//     }, 1000)
// })

// promiseFour.
// then((user)=>{console.log(user); return user.username}).
// then((username) => {console.log(username);}).
// catch((Error)=>{ console.log(Error)}).
// finally(()=>{console.log("Either promise is resolved or terminated");})




//Handling promise using async and await syntaxconst promoiseFive = new Promise(function(resolve, reject){

// const promiseFive = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         let error = true // we can have both the cases of true and false in error variable
//         if(!error){
//             resolve({username: 'JavaScript', password : 8006})
//         }else{
//             reject("error is harming the code")
//         }
//     },2000)
// })


// async function consumePromiseFive(){
//     try {
//         const random = await promiseFive
//     } catch (error) {
//         console.log(error);
//     }
// }
   // whenever we are using async and await instead of 
 //.then, we have to wrap it in catch function.  


//consumePromiseFive()

// async function getAllUser (){
//     try {
//         const response = await fetch('https://api.github.com/users/hiteshchoudhary')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }
// getAllUser()


// response type of fetch is always a promise

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })

// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))