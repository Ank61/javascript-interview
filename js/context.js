//In browser
// console.log(window);

//Gloabal Context
// global.hello = "Hello";

// console.log(global.hello)

//Function Context
// function Context() {
//     this.next = "Hello";

//     this.accessNext = function() {
//         console.log(this); // 'this' refers to the instance of Context
//     };
// }

// const ctx = new Context();
// ctx.accessNext(); // Logs the Context instance

//Class Context
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(this.name makes a noise.);
//     }
// }

// const dog = new Animal('Rover');
// dog.speak(); // Rover makes a noise.

//Object Context
// const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     displayInfo: function() {
//         console.log(Car: this.make this.model); // 'this' refers to car
//     }
// };
// car.displayInfo(); // Car: Toyota Camry

//Arrow context
const obj = {
  name: "Charlie",
  greet: () => {
    // const innerFunc = () => {
    console.log("Hello", this.name); // 'this' refers to obj
    // };
    // innerFunc();
  },
};
obj.greet(); // Hello, Charlie
