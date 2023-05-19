require('colors');
const text = 'Hello, World!';
console.log(text.rainbow);

// First way
const { user } = require('./user.js');
user.sayHi();

// Second way
// const user = require('./user');
// user.sayHi();

// const answer = require('./user.js');
// console.log(answer);
