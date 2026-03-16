const express = require('express')
const historyRouter = express.Router()
const { db, getHistory, getHistoryByGroupId, addHistory } = require('../data/dbDriver.cjs')
const {addMessage, getChat} = require('../controllers/historyController.cjs')

historyRouter.post('/', addMessage) //add message

historyRouter.get('/:id', getChat)

module.exports = historyRouter