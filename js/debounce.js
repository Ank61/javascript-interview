// Only execute a function after a certail period of inactivity
// Delay execution of a function

// function debounce(fn, delay) {
//     let timeout;
//     return function (...args) {
//         clearTimeout(timeout);
//         timeout = setTimeout(() => fn(...args), delay);
//     };
// }

// function searchQuery() {
//     console.log('API call for search');
// }

// // Create a debounced version of searchQuery
// const debouncedSearch = debounce(searchQuery, 300);

// setInterval(() => {
//     console.log("Clicked!");
//     debouncedSearch(); // Call the debounced function
// }, 400);


// const handleChange = (event) => {
//     console.log(Hit);
//   };
//   function debounce(func, delay) {
//     let timerId;
//     return function (...args) {
//       clearTimeout(timerId);
//       timerId = setTimeout(() => {
//         func.apply(this, args);
//       }, delay);
//     };
//   }
//   // Example usage:
//   function handleScroll() {
//     console.log("Scrolled!");
//   }
//   const debouncedScrollHandler = debounce(handleScroll, 2000);


function debounce(fn, delay) {
    let timeout;
    return function (...args) {
        // console.log("Hititng closure function" , timeout)
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn(args);
        }, delay)
    }
}

function searchQuery() {
    console.log('API call for search');
}

const check = debounce(searchQuery, 3000);

check()
check()
setTimeout(() => {
    console.log("hitting last")
    check();
}, 4000)