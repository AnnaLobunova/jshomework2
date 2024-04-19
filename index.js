"use strict";
/*Problem 1 - for*/

// let userInput=prompt("Give me a number");
// let isNumber=Number(userInput);
// if (userInput.trim() !=='' && !Number.isNaN(isNumber)){
// for (let i=2; i<isNumber; i=i+2){
//     console.log(i);
// }
// } else {
//     console.log("Помилка: введіть число");
// };

/*Problem 1 - while*/
// let userInput = prompt("Give me a number");
// 
// let i=2
// while (i<isNumber){
// console.log(i);
// i=i+2;
// };
// } else{
//     console.log("Помилка: введіть число");
// };

//Problem 2

// for (let i=1; i<=100; i++ ){
//     if (i%3===0 && i%5===0){
//         console.log('FizzBuzz');
//     }else if(i%3===0){
//         console.log('Fizz');
//     }else if (i%5===0){
//         console.log("Buzz");
//     }else{
//         console.log(i);
//     };
// }

//Problem 3

let string="345675432123456";
let result="";
for (let i=0; i<= string.length; i++){
    // if (Number(string[i])<5){
    //     result=result+"0";
    // } else {
    //     result=result+"1";
    // }
    string[i]<5 ? result=result+"0":result=result+"1";
};
console.log (result);