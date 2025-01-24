// let debounceTimeout;
// function debounce(fn, delay) {
//     clearTimeout(debounceTimeout);
//     debounceTimeout = setTimeout(fn, delay);
// }

// function searchQuery() {
//     console.log('API call for search');
// }

// setInterval(() => {
//     console.log("Clicked!")
//     debounce(searchQuery, 300)
// }, 200)


function add(a, b, callback) {
    const sum = a + b;
    callback(null, sum)
};

add(1, 2, (err, data) => {
    if (err) {
        throw err("error found:");
    }
    console.log(data);
})