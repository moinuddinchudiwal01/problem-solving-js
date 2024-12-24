// 1.Check if a number is even or odd.
// Answer:
// const isEven = (val) =>{
//     if(val % 2 === 0){
//         return true
//     }else{
//         return false;
//     }
// }

// console.log(isEven(2))
// console.log(isEven(3))

// 2.Check if a number is a palindrome.
// Answer:
// const isNumberPalindrome = (val) =>{
//     const strVal = String(val);
//     let ans = strVal.split("").reverse().join("") === strVal;

//     return ans;
// }

// console.log(isNumberPalindrome(123))
// console.log(isNumberPalindrome(121))

// 3.Find the sum of all digits in a number.
// Answer:
// const sumOfAllDigit = (val) =>{
//     return String(val).split("")
//     .reduce((acc,cur)=>acc+Number(cur),0);
// }

// console.log(sumOfAllDigit(456))

// 4.Reverse a number.
// Answer:
// const reverseNumber = (val) =>{
//     return Number(String(val).split("").reverse().join(""))
// }

// console.log(reverseNumber(12345));

// 5.Find the factorial of a number.
// Answer:
// const factorialNumber = (val) =>{
//     let ans = val;
//     for(let i = val-1;i>0;i--){
//         ans *=i;
//     }

//     return ans;
// }

// console.log(factorialNumber(5));
