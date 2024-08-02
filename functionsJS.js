//Arrow functions

// const sum2 = (a, b) => {
//   return a + b;
// };

// console.log(sum2(2, 6));

// ---------------------------  Callback --------------

// callback = a function that is passed as an argument to another function
// hello(leave);

// function hello(callbacks) {
//   console.log('HEllo');
//   callbacks();
// }

// function leave() {
//   console.log('leave');
// }
// function goodBye() {
//   console.log('Good Bye');
// }
sum(displayConsole, 9, 10);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}
// ------------ Higher order functions -----------

// setTimeout()   -----------  waits little bit

// what is higher order functions   ---- a function takes another  function as a argument or return a function from it know as higher order functions

// eg
