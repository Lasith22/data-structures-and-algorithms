// Q-1 Sum of all natural numbers from 1 to n

function sumOfNaturalNumbers(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}

let result = sumOfNaturalNumbers(100);

console.log('Result', result);
