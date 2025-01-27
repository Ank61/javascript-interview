// Helpfull in resolving, parsing and manipulating URL's
//Built in method in Node 's core API

//-----------------------------------------------------------------------------
// const {URL} = require("url");
// const urlString = 'https://example.com:8080/pathname/?search=test&sort=desc#hash';
// const myUrl = new URL(urlString);
// console.log(myUrl.hostname); // 'example.com'
// console.log(myUrl.port);     // '8080'
// console.log(myUrl.pathname); // '/pathname/'
// console.log(myUrl.search);   // '?search=test&sort=desc'
// console.log(myUrl.hash);     // '#hash'

//-----------------------------------------------------------------------------
// const { URL } = require('url');

// const urlString = 'https://example.com:8080/pathname/?search=test&sort=desc#hash';
// const myUrl = new URL(urlString);

// // Modifying parts of the URL
// myUrl.hostname = 'newdomain.com';
// myUrl.pathname = '/newpath';
// myUrl.search = '?search=updated&sort=asc';
// myUrl.hash = '#newhash';

// console.log(myUrl.toString()); // 'https://newdomain.com:8080/newpath/?search=updated&sort=asc#newhash'
    

//-----------------------------------------------------------------------------
// const { URL } = require('url');
// const baseUrl = 'https://example.com';
// const relativeUrl = '/path/to/resource';
// const myUrl = new URL(relativeUrl, baseUrl);

// console.log(myUrl.toString()); // 'https://example.com/path/to/resource'

const { URL, URLSearchParams } = require('url');

const urlString = 'https://example.com/path?search=test';
const myUrl = new URL(urlString);

// Append a new parameter
myUrl.searchParams.append('sort', 'desc');

// Modify an existing parameter
myUrl.searchParams.set('search', 'updated');

// Delete a parameter
myUrl.searchParams.delete('sort');

console.log(myUrl.toString()); // 'https://example.com/path?search=updated'