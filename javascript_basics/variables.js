const accountId = 800614
let accountEmail =  "shubh56@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"
let accountstate;


/*
prefer not using var, beacuse of issue in block scope and functional scope
var= function scope, let= block scope

*/

// accountId = 2
accountEmail = "jha@gmail.com"
accountPassword = "6354626"
//accountCity="mumbai"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])