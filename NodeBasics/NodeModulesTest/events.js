const EventEmitter = require('events');
const emitter = new EventEmitter();
const emitterTwoNumbers = new EventEmitter();

emitter.on('start', (message) => console.log(message));
// emitter.once('start', (message) => console.log(message)); //* work once only for first one

emitter.emit('start', 'Start');
emitter.emit('start', 'Middle');
emitter.emit('start', 'End');

emitterTwoNumbers.on('start', (first, second) =>
  console.log(`${first} and ${second}`)
);

emitterTwoNumbers.emit('start', 1, 2);

const handler1 = () => console.log(1);
const handler2 = () => console.log(2);
const handler3 = () => console.log(3);
const handler4 = () => console.log(4);

emitter.on('start', handler1);
// emitter.off('start', handler1);
emitter.on('start', handler1);
emitter.on('start', handler1);
emitter.on('start', handler2);
emitter.on('start', handler3);
emitter.prependListener('start', handler4);

emitter.emit('start');

class User extends EventEmitter {
  constructor(name, password) {
    super();
    this.name = name;
    this.password = password;
  }

  sayHi() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const user = new User('Vasya', 228);

user.on('greetings', user.sayHi);

user.emit('greetings');
