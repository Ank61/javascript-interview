//-----------------------------------------------------------
// *
// **
// ***
// ****
// *****

// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     for(let j=0; j<=i;j++){
//         str += "*";
//     }
//     console.log(str);
//   }
// }
// pattern(5);

//--------------------------------------------------------------
// *****
// ****
// ***
// **
// *

// function pattern(n) {
//   for (let i = n; i > 0; i--) {
//     let str = "";
//     for (let j = i; j >= 0; j--) {
//       str += "*";
//     }
//     console.log(str);
//   }
// }
// pattern(5);

//-------------------------------------------------------------
//      *
//     ***
//    *****
//   *******
//  *********

// function pattern(n) {
//   for (let i = 0; i < n; i++) {
//     let str = "";
//     //Empty space
//     for (let j = n - i; j > 1; j--) {
//       str += " ";
//     }
//     str += "*";
//     // for (let k =  7; k >1; k--) {
//     //   str += "*";
//     // }
//     for (let k = 0; k < 2 * i + 1; k++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }
// pattern(5);
