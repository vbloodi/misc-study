const { stdin, stdout, exit, argv } = process;
const flag = argv[2];
const allowedFlags = ['-m', '-s'];

if (!allowedFlags.includes(flag)) {
  stdout.write('Try to use flag -s or -m');
  exit();
}

stdout.write('Please, input two numbers\n > ');

stdin.on('data', (data) => {
  let numbers = data.toString();
  let numbersArr = numbers.split(' ');
  let result;
  if (flag === '-m') {
    result = +numbersArr[0] * +numbersArr[1];
  } else if (flag === '-s') {
    result = +numbersArr[0] + +numbersArr[1];
  } else {
    stdout.write('Error!');
    exit();
  }
  stdout.write(`Result = ${result}`);
  exit();
});
