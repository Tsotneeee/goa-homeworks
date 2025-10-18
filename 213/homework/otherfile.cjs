const chatEmiter = require('./script.cjs')

chatEmiter.emit('join',"tsotne")
chatEmiter.emit('members')
chatEmiter.emit('massage',"tsotne","hello")
chatEmiter.emit('history')