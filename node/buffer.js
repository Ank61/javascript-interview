//--> A Buffer in Node.js is a temporary storage area for raw binary data that can be directly manipulated.
//--> The size of a buffer is fixed once created.
//--> Buffers are useful when working with TCP streams, file systems, or other I/O operations.

//----------------------------------------------------------------------------
//const buffer = Buffer.alloc(10); // Creates a buffer with 10 bytes, initialized to 0
//console.log(buffer); // <Buffer 00 00 00 00 00 00 00 00 00 00>

//----------------------------------------------------------------------------
// const buffer  = Buffer.from("Hello World");   // from([1,2,4,5,5])
// console.log(buffer);
// console.log(buffer.toString())

//-------------------------------------------------------------------------------
// const buffer = Buffer.alloc(10);
// buffer.write('Node.js');
// console.log(buffer.toString());
// buffer.write("Hello");
// console.log(buffer.toString());

//------------------------------------------------------------------------------
const buffer = Buffer.from('Hello, World!');
console.log(buffer[0]); // 72 (ASCII code of 'H')
console.log(String.fromCharCode(buffer[0])); // 'H'