let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

// let mydate1 = new Date(2023, 0, 23)
let mydate1 = new Date(2023, 0, 23, 5, 3)
console.log(mydate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mydate1.getTime());
console.log(Math.floor(Date.now()/1000));  // for seconds divide it by 1000, previosly it is in 
// milliseconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday 
})