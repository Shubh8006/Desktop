const mynums = [1, 2 , 3]

const total1 = mynums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 2)

const total =mynums.reduce( (acc,curr) => acc +curr, 0)

console.log(total1);
// reduce method is mainly used for adding the data inside any object or array. it contains
// an accumulator whose value assigned 0, and an initial value and current value.

const shopcart = [
    {
        itemname: "js course",

        price: 599
    },
    {
        itemname: "CSS course",

        price: 899
    },
    {
        itemname: "python course",

        price: 999
    },

]
const payment = shopcart.reduce( (acc, item) => acc + item.price, 0)

console.log(payment);
