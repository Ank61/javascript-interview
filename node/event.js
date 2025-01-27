//EventEmitter allow objects to emit named events and other objects to listen for and respond to those events
// 1) Syntax
// const EventEmitter = require('events');  //Core Module
// const purpose = new EventEmitter();  // new instance of the EventEmitter class

// purpose.on("eventHandler", (name, age) => {         // Event listener created before the event publisher 
//   console.log("Event Listerner on", name, age)
// })

// purpose.emit("eventHandler", "Ankit", 50);



// 2) Example
// const express = require('express');
// const { EventEmitter } = require('events');
// const app = express();

// // Create an instance of EventEmitter to use as a middleware event bus
// const middlewareEmitter = new EventEmitter();

// // Middleware to log requests
// app.use((req, res, next) => {
//   console.log(`Request received at ${new Date()}`);
//   middlewareEmitter.emit('requestReceived', req); // Emit a custom event
//   next(); // Continue to the next middleware or route handler
// });

// // Middleware to authenticate
// app.use((req, res, next) => {
//   // Simulate authentication
//   const isAuthenticated = true; // Replace with your authentication logic
//   if (!isAuthenticated) {
//     return res.status(401).send('Authentication failed');
//   }
//   next();
// });

// // Route handler
// app.get('/', (req, res) => {
//   res.send('Hello, Express with Middleware!');
// });

// // Listen for the custom event
// middlewareEmitter.on('requestReceived', (req) => {
//   console.log(`Custom middleware: Request received for ${req.url}`);
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

const EventEmitter = require("events");
class Events extends EventEmitter{}
const events = new Events();

events.on("Hello", ()=>{
  console.log("Hello")
})

events.emit("Hello");

