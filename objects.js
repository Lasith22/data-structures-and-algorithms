const persona = {
  firstName: 'Lasith',
  lastName: 'Kamal',
  age: 32,
  isEmployed: true,
  sayHello: function () {
    console.log('Hi iam lasith');
  },
  eat: function () {
    console.log('I am eating a bun');
  },
  arrow: () => {
    console.log('Check arrow functions');
  },
};

persona.sayHello();
persona.eat();
persona.arrow();
