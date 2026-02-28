const express = require('express')
const usersRouter = express.Router()
const { addUser, getUsers, activeUsers, getUserByUsername } = require('../data/dbDriver.cjs')

usersRouter.post('/', (req, res) => {
    if (!req.body.username || !req.body.email || !req.body.password || !req.body.gender || !req.body.address || !req.body.phone || req.body.gender == 'null') {
        res.json({ success: false, message: "Missing required fields" })
        return
    }
    const users = getUsers()
    if (users.some(user => user.email === req.body.email)) {
        res.json({ success: false, message: "User already exists" })
        return
    }
    
    const { username, email, password, gender, address, phone } = req.body
    addUser(username, email, password, gender, address, phone)
    res.json({data: getUserByUsername(username), success: true})
})

usersRouter.post('/login', (req, res)=> {
    if (!req.body.username || !req.body.email || !req.body.password ) {
        res.json({ success: false, message: "Missing required fields" })
        return
    }

    const reqBody = req.body
    const dbUser = getUserByUsername(reqBody.username)
    if (!dbUser){
        res.json({success: false, message: "user not found"})
    }
    if (dbUser.password != reqBody.password || dbUser.email != reqBody.email) {
        res.json({success: false, message: "wrong password or email"})
        return
    }
    res.json({success: true, data: dbUser})
})

usersRouter.get('/', (req, res) => {
    const users = getUsers()
    if (users.length === 0) {
        res.json({data:users, success: false, message: "No users found"})
    } else {
        res.json({data:users, success: true})
    }
})

usersRouter.get('/active', (req, res) => {
    const count = activeUsers() || 0
    res.json({count: count, success: true})
})



module.exports = usersRouter