const mheroes = ['thor', 'Hulk', 'jarvis', 'loki']
const dcHeroes = ['superman', 'batman', 'flash', 'cyborg']
  
// mheroes.push(dcHeroes)
// console.log(mheroes);

// const allheroes= mheroes.concat(dcHeroes)
// console.log(allheroes);

const everyHeroes =[...mheroes, ...dcHeroes]
// spread operator
// console.log(everyHeroes);
const nextArray = [1,2,3,4,5[6,7,8],9[10,11]]
const nextArray1 = nextArray.flat(Infinity)
// console.log(nextArray1);


// console.log(Array.isArray("Shubham"))
// console.log(Array.from("Shubham"))
// console.log(Array.from({name: "Shubham"})) // intresting case

let score1 = 100
let score2 = 500
let score3 = 1000

console.log(Array.of(score1, score2, score3));




