// // // immediately invoked function Expresssions (IIFE)

(function start(){
    console.log("Data base Connected"); // This is called IIFE: It is being used to remove
})(); // the pollution from the variables of global scope.


// // // ALWAYS USE SEMI-CLOUMN AFTER ASSIGNING ONE IIFE,OTHERWISE ERROR WILL OCCUR.

(function go(){
    console.log("lets go"); // named IIFE
})();

(() => {
    console.log(`all okay with `); // Unnamed IIFE
})()

