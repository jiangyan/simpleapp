const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
  ];
  res.json(users);
});

app.listen(8081, () => {
  console.log('Server started on port 8081');
});