// *
//   **
//    ***
//     ****
//      *****
//     ****
//    ***
//   **
//  *

function arrowPatter(num) {
  //Spaces
  for (let i = 1; i < num; i++) {
    let string = "";
    //for Spaces
    for (let j = 1; j <= i; j++) {
      string = string + " ";
    }
    //for Stars
    for (let k = 1; k <= i; k++) {
      string = string + "*";
    }
    console.log(string);
  }

  //For below
  for (let i = num; i > 1; i--) {
    let string = "";
    //for Spaces
    for (let j = i; j >= 1; j--) {
      string = string + " ";
    }
    //for Stars
    for (let k = i; k >= 1; k--) {
      string = string + "*";
    }
    console.log(string);
  }
}

arrowPatter(5);
