const { stdin, stdout, exit } = process;
const flag = process.argv[2];
const allowedFlags = ['-d', '-f'];

if (!allowedFlags.includes(flag)) {
  stdout.write('Try to use flag -d or -f');
}

if (flag === '-d') {
  stdout.write(__dirname);
} else if (flag === '-f') {
  stdout.write(__filename);
}
