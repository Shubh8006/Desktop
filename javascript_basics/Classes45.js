// class user{
//     constructor(username, email, password){
//         this.username = username;
//         this.password = password;
//         this.email = email;
//     }

//     encryptedPassword(){
//         return `Safe password is : ${this.password}`
//     }
//     correctUsername(){
//         return `Username is: ${this.username.toUpperCase()}`
//     }
// }
// const shubh = new user("shubham", "shubh@gmail.com", 8006)
// console.log(shubh.encryptedPassword());
// console.log(shubh.correctUsername());
// console.log(shubh);


// Beh ind The Scene

// function user(username, email, password){
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }
// user.prototype.encryptPassword = function(){
//     return `Encrypted password is: ${this.password}abc`
// }
// const chai = new user("shubh","chai@gmail.com", 8006)
//  console.log(chai.encryptPassword());


// Inhertitance n js

// class user {
//     constructor(username){
//         this.username = username;
//     }
//   logIn(){
//     return `${this.username} is logged in`
//   }
// }
 
// class hero extends user{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addpower(){
//         return `${this.username} is very powerful`
//     }
// }
// const shubh = new hero("Superman", 'sup@gmail.com', 8006)
// const dark = new user("darkseid")
// console.log(shubh.addpower());
// console.log(shubh.logIn());
// console.log(dark.logIn());
// //console.log(dark.addpower());



// ***  static properties ***

class user {
    constructor(username){
        this.username = username
    }

    logIn (){
        console.log(`Username is :${this.username}`);
    }
      createId (){ // static keyword is used to deny access to other users originating
        // from that same class
        return `123`
    }
}
const shubham = new user("Shubham")
console.log(shubham.createId());

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const phone = new teacher( " shubh", "i@phone.com")
//console.log(phone);