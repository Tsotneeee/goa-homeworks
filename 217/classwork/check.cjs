const Fs = require('fs');

try {
    const data = Fs.readFileSync('userText.txt', 'utf-8');
    if (data.length == 0) {
        const inp = process.argv[2];
        Fs.writeFileSync('userText.txt', inp);
    }else{
        console.log("you good");
    }
} catch (err) {
    console.error('no file? or empty brain');
    Fs.writeFileSync('userText.txt', 'empty');
}