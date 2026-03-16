const DATABASE = require('better-sqlite3');

const db = new DATABASE('267/homework/db.sqlite');

db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product TEXT NOT NULL,
      price INTEGER NOT NULL
    )
`)

function countGroupByPrice() {
  const smt = db.prepare(`
    SELECT product, price, COUNT(product) AS count FROM products GROUP BY price HAVING count < 10000
  `);
  const res = smt.all();
  return res;
}
// console.log(returnNumberOfProducts());

function maxPrice() {
  const smt = db.prepare(`
    SELECT MAX(price) AS maxPrice FROM products
  `);
  const res = smt.get();
  return res.maxPrice;
}

// console.log(maxPrice());

function addProduct(product, price) {
  const smt = db.prepare(`
    INSERT INTO products (product, price) VALUES (?, ?)
  `);
  const res = smt.run(product, price);
  return res;
}

function stockPriceSum() {
  const smt = db.prepare(`
    SELECT SUM(price) AS TPrice FROM products
  `)
  const res = smt.get();
  return res.TPrice;
}

// console.log(stockPriceSum());

function stockCount() {
  const smt = db.prepare(`
    SELECT COUNT(*) AS TCount FROM products
  `)
  const res = smt.get();
  return res.TCount;
}

function returnAll() {
  const smt = db.prepare(`
    SELECT * FROM products
  `);
  const res = smt.all();
  return res;
}

function group() {
  const stmt = db.prepare(`SELECT price, product, COUNT(price) AS count FROM products GROUP BY product`)
  return stmt.all()
}

// console.log(group())

module.exports = { db, group, countGroupByPrice, maxPrice, addProduct, stockPriceSum, stockCount, returnAll };