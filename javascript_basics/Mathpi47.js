// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descriptor);

// console.log(Math.PI);
// Math.PI = 5;// we can't overwrite the value of MATH.PI
// console.log(Math.PI);

const chai = {
    name : "Ginger tea",
    price : 500,
    isAvailable : true,
    orderChai : function(){
        console.log("Chai is ready");
    }
}
//console.log(Object.getOwnPropertyDescriptor(chai, "price"));

Object.defineProperty(chai, 'price', {
    writable : false,
    enumerable: false,
})
//console.log(Object.getOwnPropertyDescriptor(chai, "price"));

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);   
    }

}