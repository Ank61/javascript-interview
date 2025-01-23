const fs = require("fs");
//Example 1: WriteStream
// const stream = fs.createWriteStream("destination.txt");
// stream.write("Hello, this is a stream writing data.");
// stream.on("error", (err) => console.log(err));
// stream.end(()=>console.log("Written"));

//Example 2: ReadStream
// const readDestination = fs.createReadStream('destination.txt', 'utf8');
// readDestination.on('data' , (chunk)=>{
//     console.log("Reading destication : ", chunk);
// })
// readDestination.on("error", (err) => console.log("Error reading",err));
// readDestination.on('exit' , ()=>{
//     console.log("Exit" )
// })

//Example 3 : Duplex : Both write and Read stream
// const net = require('net');

// const server = net.createServer((socket) => {
//   socket.write('Hello client!'); 

//   socket.on('data', (data) => {
//     console.log('Received from client:', data.toString());
//     socket.write('Thanks for the message!');
//   });
// });

// server.listen(8000, () => {
//   console.log('Server listening on port 8000');
// });

//Example 4 Transform Streams: A type of duplex stream that can modify or transform data as it is written and read.
// const fs = require('fs');
// const zlib = require('zlib');

// const readableStream = fs.createReadStream('largeFile.txt');
// const writableStream = fs.createWriteStream('largeFile.txt.gz');
// const gzip = zlib.createGzip();

// readableStream.pipe(gzip).pipe(writableStream);

// writableStream.on('finish', () => {
//   console.log('File has been compressed successfully!');
// });



//Tasks File upload and download
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/upload') {
    const filePath = path.join(__dirname, 'uploadedFile.txt');
    const writeStream = fs.createWriteStream(filePath);

    req.pipe(writeStream); // Pipe the incoming request stream to the write stream (to save file)

    req.on('end', () => {
      res.end('File uploaded successfully!');
    });

    req.on('error', (err) => {
      res.statusCode = 500;
      res.end('Error uploading file: ' + err.message);
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000...');
});

