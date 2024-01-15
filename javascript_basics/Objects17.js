const bumble = new Object() // singleton object
// const bumble1 = {} // Non singleton object

bumble.id ="234erb"
bumble.name="Shubham"
bumble.isLoggedIn = false
// console.log(bumble);

const regularuser = {
    email: "shubham@gmail.com", 
    fullname:{
        userfullname:{
            firstname:"Shubham",
            lastname: "Tyagi"
        }
    }

}

// console.log(regularuser.fullname);
const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c", 4:"d"}
// const obj3= Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);
const users = [
    {
        id:123,
        email:"jsjjs"
    },
    {
        
    }
]
users[1].email
console.log(bumble);
console.log(Object.keys(bumble));
console.log(Object.values(bumble));
console.log(Object.entries(bumble));

console.log(bumble.hasOwnProperty("email"));


const course = {
    coursename:"Js in hindi",
    price:9999,
    teacher:"Shubham"
}
const {teacher: faculty} = course // destructuring of an object
console.log(faculty);

// // {
// //     "name": "Shubham",
// //     "height": "six feet"

// // } json format and API introduction

// [
//     {},
//     {},
//     {}
// ]