// const name= "Shubham"
// const age= 23

//  console.log(name + age + "Amazing"); //old way of joining string

// console.log(`Hello my name is ${name} and my age is ${age}  years `);
// // Modern way of writing string syntax called string interpolatrion.


const gamename = new String("PubgMobile") // another way of declaring String
// console.log(gamename[1]);
// console.log(gamename.__proto__);

// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.charAt(9));
// console.log(gamename.indexOf('o'));

// const newstring = gamename.substring(0, 5)
// console.log(newstring);
 
const anotherstring = gamename.slice(-9, 1) // we can also give negative value to te slice
console.log(anotherstring);

const newstring1 = "  shubham  "
console.log(newstring1.trim());

const url = "https://shubham.com/shubham%20tyagi"
console.log(url.replace('%20', '=' ));

console.log(url.includes('shubham'));

let magic = "i-am-cool"
console.log(magic.split('-'));