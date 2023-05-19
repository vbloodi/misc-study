const { stdin, stdout } = process;
stdout.write("Hello! What's your name ?\n");

stdin.on('data', (data) => {
  let name = data.toString();
  let reverseName = name.split('').reverse().join('');
  stdout.write(`Hello, ${reverseName}`);
  process.exit();
});
