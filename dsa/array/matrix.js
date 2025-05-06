// var rotate = function (matrix) {
//   const output = [];
//   for (let i = 0; i < matrix.length; i++) {
//     //repeat 3 times
//     const getElement = [];
//     for (j = 0; j < matrix.length; j++) {
//       //Called 3 times
//       const chosenArr = matrix[j];
//       console.log("chosen Element", chosenArr);
//       getElement.unshift(chosenArr[i]);
//       console.log("chosen Element", chosenArr[i]);
//     }
//     console.log("arr created", getElement);
//     output.push(getElement);
//   }
//   return output;
// };

// console.log(
//   rotate([
//     [5, 1, 9, 11],
//     [2, 4, 8, 10],
//     [13, 3, 6, 7],
//     [15, 14, 12, 16],
//   ])
// );

//---------------------------------------------------------------------------------
//In Place Rotation :Clockwise
// var rotate = function (matrix) {
//   const n = matrix.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//     console.log(matrix);
//   }

//   for (let i = 0; i < n; i++) {
//     matrix[i].reverse();
//   }

//   return matrix;
// };

// console.log(
//   rotate([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

//Inplace Counter Clockwise
// var rotateCounterClockwise = function (matrix) {
//   const n = matrix.length;

//   // Step 1: Transpose the matrix
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
//     }
//   }

//   // Step 2: Reverse each column (instead of rows)
//   for (let j = 0; j < n; j++) {
//     let top = 0;
//     let bottom = n - 1;
//     while (top < bottom) {
//       [matrix[top][j], matrix[bottom][j]] = [matrix[bottom][j], matrix[top][j]];
//       top++;
//       bottom--;
//     }
//   }

//   return matrix;
// };
