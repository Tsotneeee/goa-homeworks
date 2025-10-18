const EventEmiter = require('events');

// 1
const theNode = process.argv[2];
console.log(theNode);

// 2 pid

const thePid = process.pid;
console.log(thePid);

// 3
const env = process.env;
console.log(env.PATH.slice(0, 20) + '...');

// 4 
const event1 = new EventEmiter();
event1.on('message', () => 'Hello ' + process.argv[2]);
event1.emit('message');

// 5
const event2 = new EventEmiter();
event2.on('start', ()=>console.log('program Started ✓'));
event2.emit('start');
event2.on('message', msg => console.log(msg));
event2.emit('message', 'Hello ' + "my name is my name");

// 6
const event3 = new EventEmiter();
event3.on('start', ()=>console.log('program Started ✓'));
event3.emit('start');
event3.on('data', data => console.log(data % 2 === 0 ? 'even' : 'odd'));
event3.emit('data', 5);
event3.emit('data', 8);
event3.on('end', ()=>process.exit(0));

// 9
const ping1 = new EventEmiter();
const ping2 = new EventEmiter();
ping1.on('hello', ()=> console.log("hello"))
ping2.once('hello', ()=> console.log("hello2"))

ping1.emit('hello');
ping1.emit('hello');
ping2.emit('hello');
ping2.emit('hello');