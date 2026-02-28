const http = require('http');
const PORT = 6967;

const todos = ["go eat"];

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/random') {
    if (todos.length > 0) {
      const randomTodo = todos[Math.floor(Math.random() * todos.length)];
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(randomTodo);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('No todos available');
    }

    } else if (req.method === 'GET' && req.url === '/todos') {
    if (todos.length > 0) {
      const formattedTodos = todos.map((todo, index) => `${index + 1}. ${todo}`).join('\n');
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(formattedTodos);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('No todos available');
    }

  } else if (req.method === 'GET' && req.url === '/web') {
    const html = `
      <html>
      <body>
        <h1>Todo List</h1>
        <ul>
          ${todos.map(todo => `<li>${todo}</li>`).join('')}
        </ul>
      </body>
      </html>
    `;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);

  } else if (req.method === 'DELETE' && req.url === '/todo') {
    if (todos.length > 0) {
      const deletedTodo = todos.shift();
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`deleted: ${deletedTodo}`);
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('No todos to delete');
    }

  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});


server.listen(PORT, () => {console.log("Server is running on http://localhost:6967");});