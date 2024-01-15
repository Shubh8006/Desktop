lass User {
//     constructor(username){
//         this.username =username
//     }
//     logMe(){
//         console.log(`Value is : ${this.username}`);
//     }
// }

// class teacher extends User{
//     constructor(username, email, password){
//         super(username)
//         this.email = email
//         this.password = password
//     }
//     addcourse(){
//         console.log(`A new course was added by${this.username}`);
//     }
// }

// const chai = new teacher ("chai", "chai@teacher.com", 8006)
// chai.addcourse()
// const masalachai = new User("Shubham")
// masalachai.logMe()
// chai.logMe()

// // ***  static properties ***

// class user {
//     constructor(username){
//         this.username = username
//     }

//     logIn (){
//         console.log(`Username is :${this.username}`);
//     }
//      static createId (){ // static keyword is used to deny access to other users originating
//         // from that same class
//         return `123`
//     }
// }