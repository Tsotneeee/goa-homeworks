const Fs = require('fs');

const inp = process.argv[2];


try {
    Fs.writeFileSync('userText.txt', inp);
} catch (err) {
    console.error('nuh uh:', err);
}