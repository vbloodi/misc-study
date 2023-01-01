console.log('Hello, World!');

// let - can be changed
let string = 'string';

// const - cannot be changed
const number = 10;
const number2 = 15;
const boolean = true; // True = 1, False = 0 !!!
const booleanFalse = false;
const nullVar = null; // it's not a 0, but ~nothing (there is something, but nothing)
const undefinedVar = undefined; // empty (there is really nothing)
const object = {};
const array = [];
// NaN - means number (but not number, e.g. when u try to divide string on string)

string = 'newString';
// number = 15; - gives error if const string is already defined

console.log(string, number);
console.log(
  number + number2,
  number - number2,
  number / number2,
  number * number2,
  number % number2
);
console.log(string + string);
console.log(string - string); // NaN
console.log(string / string); // NaN
console.log(string * string); // NaN
console.log(boolean + boolean); // 2 (cause True + True = 2)
console.log(number + nullVar); // 10 (in this case = 10 + 0)
console.log(number + undefinedVar); // NaN
console.log(number + object); // 10[object Object]
console.log(number + string);
console.log('2' + '2'); // 2 + 2 = 22
console.log(boolean);
console.log(String(boolean)); // transform any type to String
//! Note that number is yellow and string is white in console
console.log(Number(nullVar)); // transform to number (null = 0)
console.log(Number(undefinedVar)); // NaN
console.log(Number(object)); // NaN
console.log(Number(array)); // 0
//! Important
console.log(Boolean('')); // False
console.log(Boolean('123')); // True (even if in value just a space ' ', it gonna be true)
// Boolean(null/undefined/NaN) - False
// Boolean(0) - False
// Boolean(-10) - True
// Boolean({object}/[array]) - True (even if they are empty)

//* Logical Operators
console.log('--- Logical Operators ---');
console.log(boolean && boolean); // && means 'and' (this one show - True)
console.log(boolean && booleanFalse); /* this one show - False
(cause if any of value return False it gonna be - False) */
console.log(boolean || boolean); // || means 'or' (this one show - True)
console.log(boolean || booleanFalse); /* this one show - True
(cause if any of value return True it gonna be - True) */
console.log(!booleanFalse); /* - ! means 'not' (this one show - True)
(cause it's just return opposite boolean value */
console.log(true && 'string'); // in this case it return 'string'
console.log(0 || 0 || ''); // in this case it return ''  (last value)
console.log('' || 0 || 0); // in this case it return 0  (last value)
console.log(10 < 15); // True
console.log(10 > 15); // False
console.log(10 == 15); // False
console.log(10 == '10'); // True
console.log(10 === '10'); // False // ! (Always use === ) ! Cause it forbid equality of different types

for (let i = 0; i < 10; i++) {
  console.log(i); // 0-9
}

let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}
// or
do {
  console.log(i);
  i++;
} while (i < 10);
// difference in 'while-do' and 'do-while' that 'do' gonna work at least 1 time !

if (i > 0) {
  // if 'true' do (convert in boolean)
  console.log(i);
} else {
  console.log('none');
}

if (i > 0) {
  console.log(i);
} else if (i === 0) {
  console.log('zero');
} else {
  console.log('none');
}

function sumNumber(number1, number2) {
  console.log(number1 + number2);
}

sumNumber(10, 20); // Function Call

function magicNumber(number1, number2) {
  if (number1 > number2) {
    console.log(number1 - number2);
  } else {
    console.log(number1 * number2);
  }
}

magicNumber(2, 3); // 2 < 3 ==> 2 * 3 = 6
magicNumber(3, 2); // 3 > 2 ==> 3 - 2 = 1

function magicNumber(number1, number2) {
  if (number1 > number2) {
    return number1 - number2; // return terminates function execution
  } else {
    return number1 * number2;
  }
}

const result = magicNumber(2, 3);
console.log(result); // 2 * 3 = 6
