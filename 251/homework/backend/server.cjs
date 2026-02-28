const express = require('express')
const {readDb, writeDb, get, addItem, findById, deleteById, reset, dbSize} = require('../db/dbComm.cjs')
const app = express()
const port = 3000

app.use(express.json())

app.get('/random', async (req, res) => {
    const size = await dbSize('todoLists');
    const rand = Math.floor(Math.random() * size)+1;
    const itm = await findById('todoLists', rand);
    res.json(itm);
})

app.get('/todos', async (req, res) => {
    const data = await get('todoLists');
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data, null, 2));
})

app.get('/web', async (req, res) => {
    const data = await get('todoLists');
    let html = '<html><body><ul>';
    data.map(itm => {
        html += `<li>${itm.id}: ${itm.todo}</li>`;
    })
    html += '</ul></body></html>';
    res.json({ data: html, success: true });
});

app.delete('/todos/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    res.send(await deleteById('todoLists', id));
})

app.post('/todos', async (req, res) => {
    const itm = req.body;
    
    res.send(await addItem('todoLists', itm));
})

app.listen(port, () => console.log("Example app listening on port 3000!"))