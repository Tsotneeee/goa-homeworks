const Fs = require('fs');

const inp = process.argv[2];

function readFileContent(path) {
    try {
        Fs.readFile(path, 'utf8', (err, data) => {
            console.log(data)
        })
    }catch (err){
        console.error(err)
    }
}

function writeToFile(path, content) {
    try{
        Fs.writeFileSync(path, content)
    }catch(err){
        console.error(err)
    }
}

writeToFile('./text.txt', inp);
readFileContent('./text.txt');