const fs = require('fs');

//write file(synchronously)
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

//write file(asynchronously)
fs.writeFile('notes.txt', 'This file was created by Node.js Async!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

//read file(synchronously). it returns a buffer but asynchroneously doesn't return anything only callback
const res=fs.readFileSync('notes.txt', 'utf8');
console.log({res});