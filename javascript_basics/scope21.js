let a = 300
var c = 80

if(true){
    let a = 10
    const b =20 
    var c =30 // this is block scope inside all of this if operator and outside this is global scope
    // console.log("Inner :", c);
}


// console.log(a);
// console.log(b);
// console.log(c); // reason we dont use var, because it always nullify or break the concept
// of block and functional scope i.e if we have given a any value to the var outside of the
// block scope and in the block scope at the same time, then it always gives us value inside
// the block scope as output,thereby ignoring the value in functional scope.


function one(){
    const username ="Shubham"

    function two(){
        const website = "youtube"
        console.log(username);

    }
    // console.log(website);

    two() 
}
one()

// if(true){
//     const username = "shubham"
//     if(username === "shubham"){
//         const website = " youtube"
//         console.log(username + website);
//     }
    // console.log(website);
// }
// console.log(username);


//   ******* Intresting *******
// this here shows two ways of declaring a function, one is by regular approach of creating
// a function and other by declaring function in a variable. In first case we are able to
// gert output of the function before declaring the function, but in second case it shows 
// error in accesing the same function before its declaration, this is due to the concept of 
// hoisting, we can host functions directly,but functions inside the variable cant be done
// in this manner.
3