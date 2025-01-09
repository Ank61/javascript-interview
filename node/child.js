/////////////////// /////////   CHILD PROCESSES  /////////////////////////////
//// Spawn Method in child process

//   const {spawn} = require('child_process');
//   const multiprocess = spawn("node" , ['-v'],{shell : true});
//   // stdout will give stream of result 
//   multiprocess.stdout.on("data", (data)=>{
//     console.log("data from strdout" , data.toString())   //to make buffer data into the string
//   })  

//   // stderr will give the error for the dir command and not the spawn function, you have to handle the spawn error sepratly. 
//   multiprocess.stderr.on("data",(err)=>{
//     console.log("Error from dir commamnd" , err)
//   })



  // exec method in the child processes
const {exec} = require("child_process");
exec("copy server.js dummy.js", (err, stdout , stderr)=>{
  if(err){
    console.log("Error has occured" , err);
  }
  if(stderr){
    console.log("Error has occured in the stream", stderr)
  }
  console.log("Respnse " , stdout);
});


// Diference between spawn and exec methods
// const {exec, spawn } =require("child_process");
// exec("node readFile.js" , (err, stdout , stderr)=>{
//   if(err){
//     console.log("Error occured in the exec",err)
//   }
//   if(stderr){
//     console.log("error occureed in the exec stream",stderr)
//   }
//   console.log("Rsult from exec", stdout)
// })

// const multipleProcess = spawn("node readFile.js", [],{shell : true});
// multipleProcess.stderr.on("data",(err)=>{
// console.log("Error occurede on  the spawn" , err)
// })
// multipleProcess.stdout.on("data",(data)=>{
// console.log("Result of spawn" , data)
// });







///// EVENT EMITTER  /////////////////
// 1) Syntax
// const EventEmitter  = require('events');  //Core Module
// const purpose = new EventEmitter();  // new instance of the EventEmitter class

// purpose.on("eventHandler",()=>{         // Event listener created before the event publisher 
//     console.log("Event Listerner on")
// })

// purpose.emit("eventHandler");



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