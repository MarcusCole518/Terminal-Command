const fs = require('fs');

module.exports.ls = () => {
    fs.readdir('./', (err, files) => {
        const filesToString = files.reduce((acc, file) => {
            return `${acc} ${file}`;
        }, '');

        console.log(filesToString);
    });
};

module.exports.touch = () => {
    fs.writeFile('newFile.txt', 'This is a new file.', 'utf8', (err) => {
        if(err) throw err;

        console.log('It worked!')
    });
};

module.exports.createFile = () => {
    fs.mkdir('newDir', {recursive: true}, (err) => {
        if(err) throw err;

        console.log("created directory!")
    });
};
