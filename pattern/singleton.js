//------> 1. Using constructor
class Singleton {
    constructor() {
        if (Singleton.instance) {
            console.log("Instance called")
            return Singleton.instance;
        };
        Singleton.instance = this;
        this.data = 'Single Intstance'
    }
    getData() {
        return this.data;
    }
    setData(data){
        this.data = data;
        return {
            message : 'New Data is set',
            data : this.data,
        }
    }
}

// //Called First time
// const singletonInstance   = new Singleton();
// console.log("Initial Intance Called" , singletonInstance.getData());

// //Called Second time
// const singletonInstance2   = new Singleton();
// console.log("Second Intance Called" , singletonInstance.setData('Nice'));
// console.log("Checking Second Data" , singletonInstance.getData());

//----> 2. Objects

// const Singleton = {
//     instance: null,
//     getInstance: function () {
//         if (!this.instance) {
//             this.instance = {
//                 data: "I am the Singleton instance",
//                 getData() {
//                     return this.data;
//                 },
//                 setData(data) {
//                     this.data = data;
//                 },
//             };
//         }
//         return this.instance;
//     },
// };

// // Usage
// const singleton1 = Singleton.getInstance();
// console.log(singleton1.getData()); // Output: I am the Singleton instance

// const singleton2 = Singleton.getInstance();
// singleton2.setData("Singleton instance updated");

// console.log(singleton1.getData()); // Output: Singleton instance updated
// console.log(singleton1 === singleton2); // Output: true






// ----> 3. Using Function (IIF's) Closure Property
// const Singleton = (function () {
//     let instance;
//     function createInstance() {
//         return {
//             data: "I am the Singleton instance",
//             getData() {
//                 return this.data;
//             },
//             setData(data) {
//                 this.data = data;
//             },
//         };
//     }
//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         },
//     };
// })();

// // Usage
// const singleton1 = Singleton.getInstance();
// console.log(singleton1.getData()); // Output: I am the Singleton instance

// const singleton2 = Singleton.getInstance();
// singleton2.setData("Singleton instance updated");

// console.log(singleton1.getData()); // Output: Singleton instance updated
// console.log(singleton1 === singleton2); // Output: true



//Real World Example -- LOGGING SERVICE USING SINGLETON
// const Logging = (function () {
//     let instance;

//     function createInstance() {
//         instance = {};
//         console.log("Instance ready");
//         return instance;
//     }

//     return {
//         getInstance: function () {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         },
//         log: function (loggingData) {
//             console.log("Logging Service:", loggingData);
//         },
//     };
// })();

// const logging = Logging;

// const check = logging.getInstance();
// logging.log('Incoming ..');


