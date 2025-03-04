function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Fetching from cache:', key);
            return cache[key];
        } else {
            console.log('Calculating result for:', key);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function slowFunction(num) {
    // Simulate an expensive computation
    let result = 0;
    for (let i = 0; i <= num; i++) {
        result += i;
    }
    return result;
}

const memoizedSlowFunction = memoize(slowFunction);

console.log(memoizedSlowFunction(5)); 
console.log(memoizedSlowFunction(5));  