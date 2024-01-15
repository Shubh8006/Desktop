// he call() method of Function instances calls this function with a given this value and 
// arguments provided individually.
function setUsername(username){
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    setUsername.call(this, username)
    /*
    A call method is used when we want to call another function inside any function,here when 
    we call the outside function in the function we are working, then the execution context
    of the function which is called is removed from the call stack, so in order to hold the
    execution context of that called function, we uses call method
    */
    this.email=email
this.password= password

}

const chai = new  createUser("shubham", "re45@gamil.com", 8006)
console.log(chai);