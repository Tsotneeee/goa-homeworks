const fs = require('node:fs/promises');
const path = require('node:path');

const dbPath = path.resolve(__dirname, 'db.json');

async function readDb() {
  const data = await fs.readFile(dbPath, 'utf-8');
  return JSON.parse(data);
}

async function writeDb(newData) {
  await fs.writeFile(dbPath, JSON.stringify(newData, null, 2));
}

async function get(key) {
  const data = await readDb();
  return data[key];
}

async function addItem(key, itm) {
  const data = await readDb();
  if (itm.id == null) {
    const ids = data[key].map(e => e.id).filter(Number.isFinite);
    itm.id = ids.length ? Math.max(...ids) + 1 : 1;
  }
  if (data[key].some(e => e.id === itm.id)) return "item with this id already exists";
  data[key].push(itm);
  await writeDb(data);
  return itm;
}

async function findById(key, id) {
  const data = await readDb();
  const arr = data[key] || [];
  return arr.find(el => el.id == id) || null;
}

async function deleteById(key, id) {
  const data = await readDb();
  const arr = data[key] || [];
  const idx = arr.findIndex(el => el.id == id);
  if (idx === -1) return null;
  const [removed] = arr.splice(idx, 1);
  data[key] = arr;
  await writeDb(data);
  return removed;
}

async function dbSize(key) {
  const data = await readDb();
  return data[key] ? data[key].length : 0;
}

async function reset() {
  await writeDb({

    todoLists: [
      {
        id: 1,
        todo: "jump out of the window"
      },
    ]

  });
}

//// addItem('todoLists', {id: 3, todo: "go sleep" });

// readDb, writeDb, get, addItem, findById, deleteById, reset , dbSize
module.exports = { readDb, writeDb, get, addItem, findById, deleteById, reset, dbSize };