const EventEmiter = require("events")

const doorEmiter = new EventEmiter()
const windowEmiter = new EventEmiter()
const lightBulbEmiter = new EventEmiter()
let doorStatus = "closed"
let windowStatus = "closed"
let lightBulbStatus = "off"

doorEmiter.on('open',()=> doorStatus = "opened")
doorEmiter.on('close',()=> doorStatus = "closed")
doorEmiter.on('isDoorOpen',()=> console.log("door is " + doorStatus))

windowEmiter.on('open',()=> windowStatus = "opened")
windowEmiter.on('close',()=> windowStatus = "closed")
windowEmiter.on('isWindowOpen',()=> console.log("window is " + windowStatus))

lightBulbEmiter.on('On',()=> lightBulbStatus = "on")
lightBulbEmiter.on('Off',()=> lightBulbStatus = "off")
lightBulbEmiter.on('isLightBulbOn',()=> console.log("light bulb is " + lightBulbStatus))