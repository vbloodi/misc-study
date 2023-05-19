// os Module

const os = require('os');

// Платформа
console.log(os.platform());

// Архитектура
console.log(os.arch());

// Информация о CPU
console.log(os.cpus());

// Общий объём памяти
console.log(os.totalmem());

// Объём свободной памяти
console.log(os.freemem());

// Корневая директория
console.log(os.homedir());

// Время работы системы
console.log(os.uptime());

// Символ окончания строки в данной системе
console.log(os.EOL);

// http Module

const http = require('http');

const PORT = 3000;

const requestHandler = (request, response) => {
  const { method, url } = request;
  const heading = `<h1 style="color: red">${url} page</h1>`;
  const content = `<div style="background-color: green; width: 100px; height: 100px">Green block 100px x 100px</div>`;
  console.log(`Received ${method} - request on ${url}`);
  response.write(heading);
  response.end(content);
};

const server = http.createServer(requestHandler);

server.listen(PORT, 'localhost', () => {
  console.log(`Server launched on ${PORT} port`);
});
