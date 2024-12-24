// 1.What are the possible ways to create objects in JavaScript
// Answer:

// 1: Object literal syntax and Object initializer
// const object = {
//   name: "Jhone",
//   age: 30,
//   sum: (val1, val2) => {
//     return val1 + val2;
//   },
//   colors: ["Red,Blue,Green,Pink,Orange"],
//   car: {
//     name: "BMW",
//     color: "Black",
//     type: "G CLass",
//   },
//   isActive: true,
// };
// console.log(object.name);
// console.log(object.sum(10,20));
// console.log(object.colors);
// console.log(object.car.name)

//

// 2.Object constructor:
// const object = Object();

// 3. Object's create method:
// let vehicle = {
//     wheels: '4',
//     fuelType: 'Gasoline',
//     color: 'Green'
//   }
//   let carProps = {
//     type: {
//       value: 'Volkswagen'
//     },
//     model: {
//       value: 'Golf'
//     }
//   }

//   var car = Object.create(vehicle, carProps);
//   console.log(car);
