const fs = require('fs');

//write file(synchronously)
// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');

//read file(asynchronously)
fs.writeFile('notes.txt', 'This file was created by Node.js Async!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});