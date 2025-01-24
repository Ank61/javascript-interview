// const http = require("http");
// const server = http.createServer((request, response) => {
//   if (request.method === "GET") {
//     response.writeHead(200, {"content-type" : "text/html"})
//     response.end("Hello world")
//   }
// });

// server.listen(3000, () => {
//   console.log("Server working on :", 3000);
// });


//--------------------------------------------------------------
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';

    // Read the data chunks from the request body
    req.on('data', (chunk) => {
      body += chunk;
    });

    // When the entire body has been received, parse it
    req.on('end', () => {
      const parsedData = JSON.parse(body);

      // Save data to a file (as an example)
      fs.writeFileSync('data.json', JSON.stringify(parsedData));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Data received successfully' }));
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('Page Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});