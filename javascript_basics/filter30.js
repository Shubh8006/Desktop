
// const coding = ["eng", "maths", "science", "hindi"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// // // for each loop doesn't return any value, we have to write manually to return the value.
// console.log(values) never run for each loop while storing value in more than one variable

// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newnums =mynums.filter( (num) => num>4) // call back function in filter
// // 2 cases of getting values through filters
// const newnums1 = mynums.filter( (num) => {
//     return num > 4
// })
// console.log(newnums);

// const newnums = []
// mynums.forEach( (num) => {
//     if(num>4){
//         newnums.push(num)
//     }
// })

// console.log(newnums);

// console.log(newnums1);


const books = [
    {
        title: "book one", genre: "fiction", publish: 1980, edition: 2001
    },
    {
        title: "book two", genre: "horror", publish: 1989, edition: 2007
    },
    {
        title: "book three", genre: "thriller", publish: 1984, edition: 2010
    },
    {
        title: "book four", genre: "fiction", publish: 1988, edition: 2009
    },
];

const userbooks = books.filter((bk) => bk.genre === "fiction" && bk.edition > 2001)

console.log(userbooks);



const mynumber = [1,2,3,4,5,6,7,8,9,10]

// const newnumber =mynumber.map( (num) => num + 10 )
// const newnumber = mynumber.map((num) => num * 10)
    // .map((num) => num + 1)
    // .filter((num => num>= 40))

const newnums = mynumber
.map((num) => num *10)
.map((num) => num +1 )
.filter((num) => num >= 40)
console.log(newnums);
// chaining
