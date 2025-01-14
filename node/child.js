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
