// - Understand the Pattern Structure
// Observe the number of rows (N) and columns in the pattern.
// Identify how values change in each row and column.
// Recognize symmetry, repetition, or numerical relationships.

// - Break It into Rows and Columns
// Most pattern problems follow nested loops:
// Outer loop → Controls rows (for i in range(N))
// Inner loop → Controls columns (for j in range(N))
// Print each row inside the outer loop.


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


// function arrowPatter(num) {
//     //Spaces
//     for (let i = 1; i < num; i++) {
//       let string = "";
//       //for Spaces
//       for (let j = 1; j <= i; j++) {
//         string = string + " ";
//       }
//       //for Stars
//       for (let k = 1; k <= i; k++) {
//         string = string + "*";
//       }
//       console.log(string);
//     }

//     //For below
//     for (let i = num; i > 1; i--) {
//       let string = "";
//       //for Spaces
//       for (let j = i; j >= 1; j--) {
//         string = string + " ";
//       }
//       //for Stars
//       for (let k = i; k >= 1; k--) {
//         string = string + "*";
//       }
//       console.log(string);
//     }
//   }

//   arrowPatter(5);

//-----------------------------------------------------------------------------------------------------

//   function stringPattern(str) {
//     const reverStr = str.split('').reverse().join(''); 
//   console.log(str);
//   for(let i=0 ; i<str.length; i++){
//     let output ="";
//     //first Leters
//         output = output + str[i]
//     //Space
//     for(let k=0 ; k<str.length-2; k++){
//         output = output + ' ';
//     }
//     //Last letters
//         output = output + reverStr[i];

//     console.log(output);

//   }
//   console.log(reverStr);

// }

// stringPattern("ankithello");

//-----------------------------------------------------------------------------------------------------

// *          *
// **        **
// ***      ***
// ****    ****
// *****  *****
// ************
// ************
// *****  *****
// ****    ****
// ***      ***
// **        **
// *          *

function star(num) {

    for (let i = 0; i <= num; i++) {
        let finalLine = "";

        for (let j = 0; j <= i; j++) {
            finalLine = finalLine + "*";
        }

        for (let k = 0; k <= num - i; k++) {
            finalLine = finalLine + " ";
        }


        for (let j = num - i; j > 1; j--) {
            finalLine = finalLine + " ";
        }

        for (let k = 0; k <= i; k++) {
            finalLine = finalLine + "*";
        }
        console.log(finalLine)
    }



    for (let i = 0; i <= num; i++) {
        let finalLines = "";

        for (let j = num-i; j>1; j--) {
            finalLines = finalLines + "*";
        }

        // for (let k = 0; k <= num - i; k++) {
        //     finalLine = finalLine + " ";
        // }
        console.log(finalLines)
    }
}

star(6)