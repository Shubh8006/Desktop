// class user{
//     constructor(email, password){
//         this._email = email
//         this._password = password
//     }
//     set email (value){
//       this._email = value.toUpperCase() // underscore here defines a private property
//     }
//     get email(){
//         return `${this._email}`
//     }
//     set password(value){ // here bot the constructor and setter are setting the value, both
//         // of them get confused and we got an error. and thus setteroverwrite the values of constructor
//         this._password = value
//     }
//     get password(){
//         return `${this._password}`
//     }
// }

// const shubh= new user('shubh65@gmail.com', "abc")
// // console.log(shubh.password);
// // console.log(shubh.email);



// // getter and setter by old method function based 

 
function user2(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        set : function(value){
            this._email = value
        },
        get : function(){
            return `${this._email}`
        }
    })
}
const chai = new user2("vhai@34.com", "987yt")
//console.log(chai.email);


//Object based getter and seter

const user = {
_email : "hj@g.com",
_password : "abc23",


get email(){
return this._email.toUpperCase()
},
set email(value){
this._email = value
}
}

const tea = Object.create(user)
console.log(user.email);