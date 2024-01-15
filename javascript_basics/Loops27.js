// //*** for loop ****

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log("5 is king");
//     }
//   // console.log(element);
    
//   }
// console.log(element);

// for (let i=1; i<+10;i++){
//   console.log(`outer loop value: ${i}`);
//   for(let j =1; j<=10; j++){
//     console.log(`inner loop value: ${j} and outer loop value: ${i}`);
//     console.log(i + "*"+ j + "="+ i*j);
//   }
  
// }
let myArray = ["red", "pink", "green"]
console.log(myArray.length);
for(let index=0; index< myArray.length; index++){
  const element = myArray[index]
  // console.log(element);
}

// // **** break and continue *****

for(let i =1; i<=20; i++){
  if(i == 10){
    console.log("10 is detected");
    break
  }
  // console.log(i);
}


for (let index = 1; index <= 20; index++) {
    if(index== 5){
        console.log("5 Detected");
        continue
    }
  console.log(index);
    
}