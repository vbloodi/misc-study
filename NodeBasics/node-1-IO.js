const { stdin, stdout } = process;
stdout.write("Hello! What's your name ?\n");

stdin.on('data', (data) => {
  stdout.write(`Hello, ${data}`);
  process.exit();
});

process.on('exit', () => stdout.write('Good luck with learning Node.JS!'));
