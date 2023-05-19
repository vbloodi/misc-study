// path Module

const path = require('path');

console.log(path.basename(__filename)); // basic-modules.js - имя файла на Windows, полный путь к файлу на POSIX-системах
console.log(path.dirname(__filename)); // C:\Users\Admin\Desktop\nodejs-basic - название папки
console.log(path.extname(__filename)); // .js - расширение файла
console.log(path.parse(__filename)); // возвращает объект в котором указывается корень диска, имя папки, имя файла, расширение файла, имя файла без расширения
console.log(path.join(__dirname, 'test', 'second.html'));
console.log(path.resolve(__dirname, './test', '/second.html'));

// fs Module

const fs = require('fs');

// Create folder 'notes' in current dir
fs.mkdir(path.join(__dirname, 'notes'), (err) => {
  if (err) throw err;
  console.log('Folder was created');
});

fs.writeFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'Hello world!',
  (err) => {
    if (err) throw err;
    console.log('File was created');
  }
);

fs.appendFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  ' From append file',
  (err) => {
    if (err) throw err;
    console.log('File was edited');
  }
);

fs.readFile(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  (err) => {
    if (err) throw err;
    console.log('File was renamed');
  }
);
