const fs = require('fs')

fs.readFile('text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.realpath('text.txt', (err, resolvedPath) => {
    if (err) throw err;
    console.log(resolvedPath);
});

fs.copyFile('text.txt', 'destination.txt', (err) => {
    if (err) throw err
    console.log('File copied successfully')
});

fs.unlink('destination.txt', (err) => {
    if (err) throw err;
    console.log('Copied file was deleted');
  });
