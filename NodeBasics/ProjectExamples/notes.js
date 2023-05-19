const fs = require('fs');

const fileCheck = './notes.json';

const [command, title, content] = process.argv.slice(2);

init();

switch (command) {
  case 'list':
    list();
    break;
  case 'view':
    view(title);
    break;
  case 'create':
    create(title, content);
    break;
  case 'remove':
    remove(title);
    break;
  default:
    console.log('Unknown command');
}

// function init() {
//   fs.access(fileCheck, fs.F_OK, (err) => {
//     if (err) {
//       fs.writeFile('notes.json', '[]', (err) => {
//         if (err) throw err;
//         console.log('File was created');
//         return;
//       });
//     }
//   });
// }

function init() {
  try {
    if (!fs.existsSync(fileCheck)) {
      fs.writeFile('notes.json', '[]', (err) => {
        if (err) throw err;
        console.log('File was created');
        return;
      });
    }
  } catch (err) {
    console.error(err);
  }
}

function create(title, content) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Note created');
    });
  });
}

function list() {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.forEach((note, index) => console.log(`${index + 1} ${note.title}`));
  });
}

function view(title) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    const note = notes.find((note) => note.title === title);
    if (!note) {
      console.log("Note doesn't found");
      return;
    } else {
      console.log(note.content);
    }
  });
}

function remove(title) {
  fs.readFile('notes.json', (error, data) => {
    if (error) return console.error(error.message);
    let notes = JSON.parse(data);
    notes = notes.filter((note) => note.title !== title);
    const json = JSON.stringify(notes);
    fs.writeFile('notes.json', json, (error) => {
      if (error) return console.error(error.message);
      console.log('Note was removed');
    });
  });
}
