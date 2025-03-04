//  Every JavaScript object has a special property called __proto__ (or [[Prototype]]), which points to its prototype object. 
//  When you try to access a property or method on an object, JavaScript first looks for it on the object itself. 
//  If it doesn’t find it, JavaScript looks up the prototype chain until it finds the property/method or reaches the end (null). 


// In JavaScript, prototype inheritance is the mechanism by which 
// objects inherit properties and methods from other objects. 
// Every JavaScript object has an internal link to another object called its prototype.
// When you try to access a property on an object, JavaScript first checks that object; 
// if the property isn’t found, it looks up the prototype chain until 
// it finds the property or reaches the end of the chain.

function Person(name) { 
    this.name = name; 
} 

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`); 
}; 

const john = new Person("John"); 
john.greet(); 

// Here, the greet method is not directly on john, but JavaScript finds it in Person.prototype. 

console.log(john.__proto__ === Person.prototype); // true 
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null 


//--------------------------------------------------------------------------------------
// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Methods defined in a class are added to its prototype
//     sayHello() {
//       console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
  
//   const jane = new Person("Jane", 25);
//   jane.sayHello(); // Output: Hi, I'm Jane and I'm 25 years old.
  