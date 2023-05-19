// First way
const user = {
  name: 'Vlad',
  age: 24,
  sayHi() {
    console.log(`Hello! My name is ${this.name}!`);
  },
};

console.log(user);

exports.user = user;
// same as module.exports

// Second way
// module.exports = {
//   name: 'Vlad',
//   age: 24,
//   sayHi() {
//     console.log(`Hello! My name is ${this.name}!`);
//   },
// };

// or
//* module.exports = user;
// and 'const user = ...' from First way

// module.exports = 42;
