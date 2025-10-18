const os = require('os');
const path = require('path');

// os type returns the operating system name
console.log(os.type())
console.log(os.type() == 'Windows_NT' ? 'You are using Windows' : 'You are not using Windows')

// os arch returns cpu architecture
console.log(os.arch())
console.log(os.arch() == 'x64' ? 'You are using 64 bit architecture' : 'You are using 32 bit architecture')

// os platform returns the operating system platform
console.log(os.platform())
console.log(os.platform() == 'win32' ? 'You are using Windows' : 'You are not using Windows')

// os hostname returns the hostname of the operating system
console.log(os.hostname())
console.log(`Your hostname is: ${os.hostname()}`)

// os totalmem returns the total memory of the operating system in bytes


// path basename returns the last portion of a path
console.log(path.basename('C:/Users/HP/Desktop/Nodejs/219/homework/script.cjs'))

// path extname returns the extension of the path
console.log(path.extname('C:/Users/HP/Desktop/Nodejs/219/homework/script.cjs'))

// path join joins all given path segments together using the platform specific separator as a delimiter
console.log(path.join('C:/Users/HP/Desktop/Nodejs', '219', 'homework', 'script.cjs'))

// path resolve resolves a sequence of paths or path segments into an absolute path
console.log(path.resolve('C:/Users/COTNE/Desktop/Nodejs', '219', 'homework', 'script.cjs'))