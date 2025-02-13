// function isPalindrone(str) {
//   return str === str.split("").reverse().join("");
// }

// function filterEvenNumbers(numbers) {
//   return numbers.filter((num) => num % 2 === 0);
// }

//A factorial number is the product of all positive integers,
// which are equal to or less than the given number.

function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

// console.log(isPalindrone("nitin"));
// console.log(filterEvenNumbers([2,4,5,6,7]));
console.log(factorial(4));
