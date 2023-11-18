const fs = require('fs');


if (process.argv.length !== 3) {
  console.error('Usage: node ReadFile.js <filename>');
  process.exit(1);
}

const filename = process.argv[2];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
  } else {
    console.log(data);
  }
});