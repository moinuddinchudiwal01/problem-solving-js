// 1.Find the sum of all elements in an array.
// Input: [1, 2, 3, 4], Output: 10.
// Answer:
// const arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// 2.Find the largest number in an array.
// Input: [1, 2, 3, 4], Output: 4.
// Answer:
// const arr = [1, 2, 3, 4, 5];
// let largest = arr.reduce((acc, cur) => (cur > acc ? cur : acc));
// console.log(largest);

// 3.Find the smallest number in an array.
// Input: [1, 2, 3, 4], Output: 1.
// Answer:
// const arr = [1, 2, 3, 4, 5];
// let smallest = arr.reduce((acc, cur) => (cur < acc ? cur : acc));
// console.log(smallest);

// 4.Reverse an array.
// Input: [1, 2, 3, 4], Output: [4, 3, 2, 1].
// Answer:

// # Solution 1:
// const arr = [1, 2, 3, 4, 5];
// let reversed = arr.reverse();
// console.log(reversed);

// # Solution 2:
// const arr = [1, 2, 3, 4, 5];
// let reversed = arr.reduceRight((acc, cur) => [...acc, cur]);
// console.log(reversed);

// 5.Check if an array is sorted in ascending order.
