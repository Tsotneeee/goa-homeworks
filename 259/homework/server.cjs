const express = require('express')
const {db} = require('./db.cjs');
const app = express()
const PORT = 3000

let data;

function ceche() {
    data = db.prepare(`SELECT * FROM sentences`).all()
}
ceche()

app.get('/sentence', (req, res) => {
    res.json({ data:data, success: true})
})

app.post('/sentence', express.json(), (req, res) => {
    if (data.find(el => el.sentence === req.body.sentence)) {
        return res.json({ error: 'Sentence already exists', success: false })
    }
    db.prepare(`
        INSERT INTO sentences VALUES (?, ?)
    `).run(null, req.body.sentence)
    ceche()
    res.json({ sentence: req.body.sentence, success: true })
})



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))