// // 1 - Basics
// const cluster = require("cluster");
// const os = require("os");
// const http = require("http");

// if (cluster.isMaster) {
//     const workers = [];
//     console.log(`Master is runnign`, process.pid);
//     console.log("Cores", os.cpus().length)
//     for (let i = 0; i < os.cpus().length; i++) {
//         const worker = cluster.fork();
//         workers.push(worker);
//     };


//     cluster.on("exit", (worker, code, signal) => {
//         console.log(`Process ${worker.process.pid} died`);
//         cluster.fork();
//     })
// }
// else {
//     http.createServer((request, response) => {
//         response.writeHead(200);
//         response.end("Hello Clustering");
//         console.log("About to dies", process.pid)
//         process.exit()
//     }).listen(8000);
//     console.log(process.pid, "process running")
// }


// const cluster = require('cluster');
// const http = require('http');
// const os = require('os');

// // If this is the master process
// if (cluster.isMaster) {
//   console.log(`Master ${process.pid} is running`);

//   // Fork workers for each CPU core
//   const numCores = os.cpus().length;
//   for (let i = 0; i < numCores; i++) {
//     const worker = cluster.fork();
    
//     // Listen to messages from the worker
//     worker.on('message', (msg) => {
//       if (msg.status === 'ready') {
//         console.log(`Worker ${worker.process.pid} is ready to handle requests.`);
//       }
//     });
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//     cluster.fork();  // Re-spawn a worker
//   });

// } else {
//   // Worker process
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello, Cluster with Communication!');
//   }).listen(8000);

//   // Send message to master when worker is ready
//   process.send({ status: 'ready' });

//   console.log(`Worker ${process.pid} started`);
// }
      
// const cluster = require('cluster');
// const http = require('http');
// const os = require('os');

// if (cluster.isMaster) {
//   console.log(Master $process.pid} is running);

//   const numCores = os.cpus().length;
//   for (let i = 0; i < numCores; i++) {
//     cluster.fork();
//   }

//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} died);
//     cluster.fork();  // Re-spawn a worker
//   });

//   // Gracefully handle termination signals
//   process.on('SIGTERM', () => {
//     console.log('Master process is shutting down gracefully.');
//     for (const id in cluster.workers) {
//       cluster.workers[id].send('shutdown');
//       cluster.workers[id].disconnect();
//     }
//   });
// } else {
//   // Worker process
//   http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end('Hello, Cluster with Graceful Shutdown!');
//   }).listen(8000);

//   console.log(`Worker ${process.pid} started);

//   // Listen for shutdown message
//   process.on('message', (msg) => {
//     if (msg === 'shutdown') {
//       console.log(`Worker ${process.pid} shutting down...);
//       process.exit(0);  // Gracefully shut down the worker
//     }
//   });
// }

// const cluster = require('cluster');
// const os = require('os');
// const express = require('express');
// const { Worker } = require('worker_threads');

// const numCPUs = os.cpus().length;

// if (cluster.isPrimary) {
//   console.log(`Primary process ${process.pid} is running`);

//   // Fork general workers
//   const generalWorkers = [];
//   for (let i = 0; i < numCPUs - 1; i++) {
//     generalWorkers.push(cluster.fork({ ROLE: 'general' }));
//   }

//   // Fork a dedicated worker for email
//   const emailWorker = cluster.fork({ ROLE: 'email' });

//   // Handle incoming requests
//   const expressApp = express();
//   expressApp.use(express.json());

//   // Routes
//   expressApp.post('/send-email', (req, res) => {
//     // Forward the email request to the email worker
//     emailWorker.send({ type: 'email-task', data: req.body });

//     // Listen for a response from the email worker
//     emailWorker.once('message', (message) => {
//       if (message.type === 'email-success') {
//         res.status(200).json({ message: 'Email sent successfully!', info: message.info });
//       } else if (message.type === 'email-error') {
//         res.status(500).json({ message: 'Failed to send email', error: message.error });
//       }
//     });
//   });

//   expressApp.get('/status', (req, res) => {
//     res.status(200).json({ message: 'Server is running!', pid: process.pid });
//   });

//   // Start the master process server
//   const PORT = 3000;
//   expressApp.listen(PORT, () => {
//     console.log(`Primary process listening on port ${PORT}`);
//   });

//   // Restart workers if they exit
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker ${worker.process.pid} exited.`);
//     if (worker === emailWorker) {
//       console.log('Restarting email worker...');
//       cluster.fork({ ROLE: 'email' });
//     } else {
//       console.log('Restarting general worker...');
//       cluster.fork({ ROLE: 'general' });
//     }
//   });
// } else {
//   const app = express();

//   // Worker-specific logic
//   if (process.env.ROLE === 'email') {
//     console.log(`Email worker ${process.pid} started`);

//     // Nodemailer setup
//     const nodemailer = require('nodemailer');
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'your-email@gmail.com',
//         pass: 'your-email-password',
//       },
//     });

//     // Listen for messages from the primary process
//     process.on('message', async (message) => {
//       if (message.type === 'email-task') {
//         const { to, subject, text } = message.data;

//         try {
//           const mailOptions = { from: 'your-email@gmail.com', to, subject, text };
//           const info = await transporter.sendMail(mailOptions);

//           // Send success response to the master
//           process.send({ type: 'email-success', info });
//         } catch (error) {
//           console.error(`Email worker error: ${error.message}`);

//           // Send error response to the master
//           process.send({ type: 'email-error', error: error.message });
//         }
//       }
//     });
//   } else {
//     console.log(`General worker ${process.pid} started`);

//     // Handle general API requests
//     app.get('/status', (req, res) => {
//       res.status(200).json({ message: 'Server is running!', pid: process.pid });
//     });

//     const PORT = 3000;
//     app.listen(PORT, () => {
//       console.log(`General worker ${process.pid} listening on port ${PORT}`);
//     });
//   }
// }
