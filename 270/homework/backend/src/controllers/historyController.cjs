const { db, getHistory, getHistoryByGroupId, addHistory } = require('../data/dbDriver.cjs')

const addMessage = (req, res) => {
    const body = req.body
    if (body == {}) {
        res.status(400).json({success: false, message: "fill the form"})
        return
    }
    
    res.json({success: true, data:addHistory(body)})
}

const getChat = (req, res) => {
    const groupId = parseInt(req.params.id)
    res.json({success: true, data: getHistoryByGroupId(groupId), groupId})
}

module.exports = {addMessage, getChat}