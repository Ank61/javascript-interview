// function add(a, b) {
//   return a + b;
// }

// function multiple(c, d) {
//   return c * d;
// }

// const answer = multiple(add(2,3),4);
// console.log(answer)

//-------------------------------------------------------------
const compose = (...functions) => (x) =>
    functions.reduceRight((acc, fn) => fn(acc), x);
  const subtract = (x) => x - 1;
  const add = (x) => x + 2;
  const multiply = (x) => x * 3;
  const composed = compose(multiply, add, subtract);
  console.log(composed(5)); // (5 - 1) + 2 * 3 = 18
  