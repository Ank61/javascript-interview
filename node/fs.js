const fs = require('fs');
//1. File CRUD  
//Syntax : 
// (filename, data(if string otherwise buffer),'encoding utf8', callback )

// fs.writeFile('output.txt', 'Hello, World!', (err) => {
//     if (err) {
//         console.error('Error writing file:', err);
//         return;
//     }
//     console.log('File written successfully!');
// });

// fs.readFile('output.txt', 'utf8', (err, data) => {
//     if (err) {
//         throw new Error('Error', err)
//     }
//     console.log('REad file :', data)
// })

// fs.appendFile('output.txt', 'AGAIN', (err, data) => {
//     if (err) {
//         throw new Error('Error', err)
//     }
//     console.log('Appended file :', data)
// })

// fs.copyFile('output.txt', 'destination.txt', (err) => {
//     if (err) throw err;
//     console.log('File was copied!');
// })

// fs.unlink('output.txt', (err) => {
//     if (err) {
//         throw new Error('Error ocurred')
//     }
// })

//2. Directory Operations

// fs.mkdir('test', { recursive: true }, (err) => {
//     if (err) {
//         throw new Error('Error', err)
//     }
// })

// fs.writeFile('./test/output.txt', 'hello worlkd', 'utf8', (err) => {
//     if (err) {
//         throw new Error("Error", err);
//     }
//     console.log("file cfreated")
// })

// fs.readdir('test', (err, data) => {
//     if (err) {
//         throw new Error("Err", err)
//     }
//     console.log("readdir", data)
// })

// fs.stat('test',(err,data)=>{
//     if (err) {
//         throw new Error("Err", err)
//     }
//     console.log(data)
// })
// fs.rmdir('test', (err) => {
//     if (err) {
//         throw new Error('Error', err)
//     }
// })
