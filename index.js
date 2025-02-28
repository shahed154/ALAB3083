
// Part 1: Fizz Buzz
let fizzBuzz = 0;

for (i = 0; i <= fizzBuzz; i++) {

    if (i % 5 == 0 && i % 3 == 0) {
        console.log(i + " Fizz Buzz")
    }
    else if (i % 5 == 0) {
        console.log(i + " Buzz")

    }
    else if (i % 3 == 0) {
        console.log(i + " Fizz")

    }
    else !(i % 5 == 0 || i % 3 == 0)
    {
        console.log(i + " Not divisble by 3 or 5")
    }
}
//console.log(n + " is a prime number")dfsgv
//Part 2: Prime Time
//let maxNumberCheck = 5
//for(n = 1; n <= maxNumberCheck; n++) {
  // let currentNum = n; 
  //  for(i = 2; i < Math.sqrt(currentNum); currentNum--){
  //      if(i % currentNum == 0){
         // console.log(n)
   //     }
   //     else
    //    {
   //     console.log(n)
  //      }
//
   // }
//}
/// I GAVE UP AND HAD TO GOOGLE IT 

let maxNumberCheck = 100
let totalPrimeNumber = 0;
for (let i = 1; i <= maxNumberCheck; i++) {
  let prime = i > 1;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      prime = false;
      break;
    }
  }
  if (prime) {
    console.log(i, "is a prime number");
    totalPrimeNumber += 1;
  } else {
    console.log(i, "is not a prime number");
  }
}
//test