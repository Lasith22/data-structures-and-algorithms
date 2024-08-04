const items = [
  { name: 'Bike', price: 100 },
  { name: 'TV', price: 400 },
  { name: 'Computer', price: 800 },
  { name: 'Phone', price: 300 },
  { name: 'Tablet', price: 200 },
  { name: 'Headphones', price: 50 },
  { name: 'Watch', price: 150 },
  { name: 'Camera', price: 500 },
  { name: 'Speaker', price: 120 },
  { name: 'Printer', price: 100 },
];

// -------- filter

// less than or equale to 100

const filterItems = items.filter((item) => {
  return item.price <= 100;
});

// console.log(filterItems);
// console.log(items);

// map

// const itemName = items.map((item) => {
//   return item.price;
// });
// console.log(itemName);

//------- find
const foundItem = items.find((item) => {
  return item.name === 'Bike';
});

// console.log(foundItem);

// ---- for Each

// items.forEach((item) => {
//   console.log(item.name);
// });

// -- includes

const numbers = [1, 4, 5, 3, 45, 3, 5];

const includSomeNumbers = numbers.includes(50);

console.log(includSomeNumbers);
