const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');

//* Readable stream
const stream = fs.createReadStream('source.txt', 'utf-8');

let data = '';

stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log('End', data.length));
stream.on('error', (error) => console.log('Error', error.message));

//* Writable stream
const input = fs.createReadStream('source.txt', 'utf-8');
const output = fs.createWriteStream('destination.txt');
// if there's no such file, then this'll create it
const gzip = zlib.createGzip();

// input.on('data', (chunk) => output.write(chunk));
input.on('error', (error) => console.log('Error', error.message));

// or just (same as above)
input.pipe(output);

// with gzip archive
input.pipe(gzip).pipe(output);

// or with error handler
pipeline(input, gzip, output, (err) => {
  if (err) {
    console.log('Error', err.message);
  }
});
