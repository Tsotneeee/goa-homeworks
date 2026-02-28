const express = require('express')
const app = express()
const port = 3000

const films = [
    { id: 0, Name: 'Inception' },
    { id: 1, Name: 'The Matrix' },
    { id: 2, Name: 'Interstellar' }
]

app.use((req, res, next) => { // forme: code ran
    console.log('code ran')
    console.log(req.url)
    next()
})

app.post('/films', express.json(), (req, res) => { //* adder
    const flm = req.body;
    for (let i of films) {
        if (i.Name === flm.Name) {
            res.send('it already exists')
            return
        }}
    films.push({ id: films.length, Name: flm.Name })
    res.json(flm)
})

app.get('/films', (req, res) => { //* get fully
    console.log(req.query.base)
    if (req.query.base == 'true') res.json(films.slice(0,3))
    else res.json(films)
})

app.get('/films/:id', (req, res) => { //* get one
    const id = parseInt(req.params.id, 10)
    const film = films.find(f => f.id === id)
    res.json(film)
})

app.delete('/films/:id', (req, res) => { //* delete
    const id = parseInt(req.params.id, 10)
    const index = films.findIndex(f => f.id === id)
    if (index != -1) {
        films.splice(index, 1)
        res.json({ message: 'Film deleted successfully' })
    } else {
        res.status(404).send('Film not found')
    }
})

app.get('/', (req, res) => res.send('Hello World!')) //// dont need this

app.use((req, res) => { //! not found
    res.status(404).send('Not Found')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))