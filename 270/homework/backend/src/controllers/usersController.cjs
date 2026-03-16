const { db, getUsers, getUserById, getUserByUsername, addUser }= require('../data/dbDriver.cjs')

const signUp = (req, res) => {
    const body = req.body
    if (body == {}) {
        res.status(400).json({success: false, message: "fill the form"})
        return
    }
    if (getUsers().some(el => body.username == el.username)) {
        res.status(409).json({success: false, message: "user already exists"})
        return
    }
    const result = addUser(body)
    res.status(201).json({success: true, data: result})
}

const logIn = (req, res) => {
    const body = req.body
        if (body == {}) {
        res.status(400).json({success: false, message: "fill the form"})
        return
    }
    const pachka = getUserByUsername(body.username)
    if (pachka.password != body.password) {
        res.json({success: false, message: "wrong password"})
        return
    }
    res.json({success: true, data: pachka})
}

module.exports = {signUp, logIn}