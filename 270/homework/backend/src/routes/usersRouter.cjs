const express = require('express')
const usersRouter = express.Router()
const { db, getUsers, getUserById, getUserByUsername, addUser }= require('../data/dbDriver.cjs')
const {signUp, logIn} = require('../controllers/usersController.cjs')

usersRouter.post('/signUp', signUp)

usersRouter.post('/logIn', logIn)

//// usersRouter.get('/',) im not sure i need ts

// usersRouter.get('/:id', )

module.exports = usersRouter