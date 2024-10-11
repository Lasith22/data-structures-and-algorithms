const object1 = { name: 'John', age: 25 };
const object2 = { job: 'Developer', country: 'USA' };

const newObj = { ...object1, ...object2 };

console.log(newObj);

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const newArray = [...array1, ...['pakaya', 'huththa']];

console.log(newArray);
