// Exmaple 1
// const { parentPort, workerData } = require('worker_threads');
// console.log("Getting data" , workerData)
// const result = workerData.split('').reverse().join('');
// parentPort.postMessage(result);

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

module.exports = { generatePrimes };
