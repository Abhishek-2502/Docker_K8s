const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => res.send('OK'));

app.get('/users', (req, res) => {
  // demo static data; replace with DB in real app
  res.json([
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
  ]);
});

app.listen(PORT, () => console.log(`Users service running on ${PORT}`));
