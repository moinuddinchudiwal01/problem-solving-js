// 1.Print a square of *.
// ****
// ****
// ****
// Answer:
// let ans = "";
// for(let i = 0;i<3;i++){
//     for(let j = 0;j<4;j++){
//         ans += "*";
//     }
//     ans += "\n";
// }
// console.log(ans);

// 2.Print a right-angled triangle of *.
// *
// **
// ***
// ****
// Answer:
// let ans = "";
// for(let i = 0;i<5;i++){
//     for(let j = 0;j<i;j++){
//         ans += "*";
//     }
//     ans += "\n";
// }
// console.log(ans);

// 3.Print an inverted right-angled triangle.
// ****
// ***
// **
// *
// Answer:
// let ans = "";
// for(let i = 0;i<4;i++){
//     for(let j = 4;j>i;j--){
//         ans += "*";
//     }
//     ans += "\n";
// }
// console.log(ans);

// 4.Print a left-aligned triangle of *.
//    *
//   **
//  ***
// ****
// Answer:
// let ans = "";
// for (let i = 0; i < 5; i++) {
//     // Spaces loop
//     for (let j = i; j <= 5 - 1; j++) {
//         ans += " ";
//     }

//     // Stars loop
//     for (let k = 1; k <= i + 1; k++) {
//         ans += "*";
//     }

//     // Add a newline at the end of each row
//     ans += "\n";
// }

// console.log(ans);

// 5.Print a right-aligned triangle of *.
// ****
//  ***
//   **
//    *
// Answer:
