// 1.Create an object to store information about a person (name, age, city).
// Answer:

// There are many ways to create objects in javascript as mentioned below:
// 1.Object literal syntax:
// const person = {
//     name:"jhone",
//     age:30,
//     city:"Ahmedabad"
// }

// 2.Object constructor:
// const object = new Object();
// The Object() is a built-in constructor function so "new" keyword is not required. The above code snippet can be re-written as:
// const object = Object();

// 3.Object's create method:
// var object = Object.create(null);

// let vehicle = {
//   wheels: '4',
//   fuelType: 'Gasoline',
//   color: 'Green'
// }
// let carProps = {
//   type: {
//     value: 'Volkswagen'
//   },
//   model: {
//     value: 'Golf'
//   }
// }

// var car = Object.create(vehicle,carProps);
// console.log(car.color);

// 2.Access properties of an object using dot and bracket notation.
// Answer:
// const person = {
//     name:"jhone",
//     age:30,
//     city:"Ahmedabad"
// }

// console.log(person.name)//DOT notation
// console.log(person["age"])//BRACKET notation

// 3.Add a new property to an object.
// Answer:
// const person = {
//     name:"jhone",
//     age:30,
//     city:"Ahmedabad"
// }
// person.email = "jhon@gmail.com";//DOT notation
// person["gender"] = "Male";//BRACKET notation

// console.log(person.email)
// console.log(person["gender"])

// 4.Delete a property from an object.
// Answer:
// const person = {
//     name:"jhone",
//     age:30,
//     city:"Ahmedabad"
// }
// delete person.city; //DOT notation
// delete person['age'];//BRACKET notation
// console.log(person)

// 5.Check if a property exists in an object.
// Answer:
// const person = {
//     name:"jhone",
//     age:30,
//     city:"Ahmedabad"
// }

// console.log("name" in person);
// console.log(person.hasOwnProperty("name"));
// console.log(Object.hasOwn(person,"name"));
