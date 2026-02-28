const express = require('express')
const app = express()
const port = 3000

const libraryData = [
  {
    id: 1,
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    genre: "Science Fiction",
    published: 1979,
    pages: 193
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    published: 1954,
    pages: 1178
  },
  {
    id: 3,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Classic",
    published: 1813,
    pages: 279
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published: 1949,
    pages: 328
  },
  {
    id: 5,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    genre: "Fantasy",
    published: 1997,
    pages: 309
  },
  {
    id: 6,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Gothic Fiction",
    published: 1818,
    pages: 280
  }
];

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))