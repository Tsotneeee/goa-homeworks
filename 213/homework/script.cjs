const EventEmiter = require("events")

const chatEmiter = new EventEmiter()

let chat = []
let chatSet = new Set(...chat)
let massages = []

chatEmiter.on('join',(person)=> {chat.push(person);chatSet.add(person);console.log(person + " joined the call")})
chatEmiter.on('leave',(person)=> {console.log(chat.length == 0?"call is empty":chat.splice(chat.indexOf(person),1) + " left the call");chatSet.delete(person)})
chatEmiter.on('members',()=>console.table(chat))
chatEmiter.on('massage',(user, msg)=>chatSet.has(user)?(console.log(`${user}: ${msg}`),massages.push({user: user, msg: msg})):console.log("!!!! user aint in chat !!!!"))
chatEmiter.on('history',()=>console.log(massages.map(massage=>`${massage.user}: ${massage.msg}`)))

chatEmiter.emit('join',"sandro")
chatEmiter.emit('join',"sandr")
chatEmiter.emit('join',"san")
chatEmiter.emit('join',"sanro")
chatEmiter.emit('leave',"sandro")
chatEmiter.emit('join',"tsotne")
chatEmiter.emit('members')
chatEmiter.emit('massage',"tsotne","hello")
chatEmiter.emit('massage',"manjanjo","world")
chatEmiter.emit('history')

module.exports = chatEmiter