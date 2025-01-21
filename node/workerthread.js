//Example : 1
// const { Worker } = require('worker_threads');

// function runWorker(input) {
//     return new Promise((resolve, reject) => {
//         console.log("sending message :", input)
//         const worker = new Worker('./worker.js', { workerData: input });

//         worker.on('message', resolve);
//         worker.on('error', reject);
//         worker.on('exit', (code) => {
//             if (code !== 0) {
//                 reject(new Error(`Worker stopped with exit code ${code}`));
//             }
//         });
//     });
// }

// runWorker('Hello from main thread!')
//     .then(result => {
//         console.log(`Result from worker: ${result}`);
//     })
//     .catch(err => {
//         console.error(`Worker error: ${err}`);
//     });


//Example 2 :
const {
    Worker,
    isMainThread,
    parentPort,
    workerData,
    threadId
} = require("worker_threads");

const { generatePrimes } = require("./worker.js");

const threads = new Set();
const number = 99;

const breakIntoParts = (number, threadCount = 1) => {
    const parts = [];
    const chunkSize = Math.ceil(number / threadCount);

    for (let i = 0; i < number; i += chunkSize) {
        const end = Math.min(i + chunkSize, number);
        parts.push({ start: i, end });
    }
    console.log("Parts breaking", parts)
    return parts;
};

if (isMainThread) {
    const parts = breakIntoParts(number, 5);
    parts.forEach((part) => {
        threads.add(
            new Worker(__filename, {
                workerData: {
                    start: part.start,
                    end: part.end,
                },
            })
        );
        //For main thread ID is 0
        console.log("Starting thread: ", threadId);
    });

    //threads: A Set of worker threads created earlier in the code. Each thread is iterated over using the forEach method.
    // For each thread, several event listeners are attached to handle various lifecycle events.
    threads.forEach((thread) => {
        console.log("Executed")
        thread.on("error", (err) => {
            throw err;
        });
        thread.on("exit", () => {
            threads.delete(thread);
            console.log(`Thread exiting, ${threads.size} running...`);
        });
        thread.on("message", (msg) => {
            //This gets message into the main thead from the POSTMessage of the worker Thread with their thread id. 
            // The main thread logs relevant information, helping monitor the status of all running threads
            console.log("Thread:", msg);
        });
    });
} else {
    // This part of the code is executed if the script is running in a worker thread rather than the main thread. The else block ensures the worker-specific logic is separated from the main thread logic.
    console.log("Current thread: ", threadId);  //1,2,3,4,5
    const primes = generatePrimes(workerData.start, workerData.end);
    // parentPort is used for communication between the worker thread and the main thread.
    parentPort.postMessage(
        `Primes from worker id  ${threadId}- ${workerData.start} to ${workerData.end}: ${primes}`
    );
    //postMessage sends a message back to the main thread. In this case, it sends a string containing:
    // The worker thread's ID (threadId).
    // The range of numbers the worker processed (workerData.start to workerData.end).
    // The list of primes found in that range.
}

// Flow:
// The main thread divides a task (finding primes) into parts and creates worker threads, passing each a portion of the task.
// Each worker thread processes its assigned range and sends the results back to the main thread.
// The main thread collects and processes the results from all worker threads.
