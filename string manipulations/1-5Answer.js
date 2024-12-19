// 1.Reverse a string.
// Input: "hello", Output: "olleh".
// Answer:
// # Solution 1:
// let str = "hello";
// console.log(str.split("").reverse().join(""))

// # Solution 2:
// const reverseStr = (val) => {
//     let ans = "";
//     for(let i = val.length-1;i>=0;i--){
//         ans +=val[i];
//     }

//     return ans;
// }
// console.log(reverseStr("hello"))

// # Solution 3:
// const reverseStr = (val) => {
//     return val.split("").reduceRight((acc,char)=>acc+char,"");
// }
// console.log(reverseStr("hello"))

// 2.Check if a string is a palindrome.
// Input: "madam", Output: true.
// Answer:
// const isPalindrome = (val) => {
//     return val.split("").reverse().join("") === val;
// }
// console.log(isPalindrome("madam"));

// 3.Count vowels in a string.
// Input: "education", Output: 5.
// Answer:
// const countVowels = (val) => {
//     const vowels = new Set(["a","e","i","o","u"]);
//     let count = 0;

//     for(const char of val.toLowerCase()){
//         if (vowels.has(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Education"))

// 4.Convert a string to uppercase and lowercase.
// Input: "hello", Output: "HELLO".
// Answer:
// const toUppercase = (val) => {
//     return val.toUpperCase();
// }

// const toLowercase = (val) => {
//     return val.toLowerCase();
// }

// console.log(toUppercase("hello"));
// console.log(toLowercase("HELLO"));

// 5.Find the frequency of each character in a string.
// Input: "education", Output: {e: 2, d: 1, u: 1, c: 1, a: 1, t: 1, i: 1, o: 1, n: 1}
// Answer:
// const findFrequency = (str) => {
//     let ans = {};

//     for(const char of str.toLowerCase()){
//         if(ans.hasOwnProperty(char)){
//             ans[char] +=1 ;
//         }else{
//             ans[char] = 1;
//         }
//     }

//     return ans;
// }

// console.log(findFrequency("Moinuddin"))
