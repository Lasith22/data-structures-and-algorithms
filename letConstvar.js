// if (true) {
//   var varVariable = 'This is true';
// }

// console.log(varVariable);

// if (true) {
//   let letVariable = 'This is true';
// }

// console.log(letVariable);
// in here in the let variable its only accesible in block scope. as an example in a if statement when we declare variable using let  and we log it it gives error. but when we declare a variable using var it can ccessible outside of the block.

// exact same as const key WebTransportDatagramDuplexStream.i it also block scope

// var variavble can be re declared.it is not good. now most of the developers not using var key word to declare variables it override the variable.

// -------- const and let ------

const constVar = 1;

let letVar = 43;

// letVar = 45;so we can change the value

console.log(letVar);

// constVar = 32;   we cant change the value when we create a variable using const key word
console.log(constVar);
