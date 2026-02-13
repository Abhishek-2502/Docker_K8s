const express = require('express');
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => res.send('OK'));

app.get('/posts', (req, res) => {
  // demo static posts
  res.json([
    { id: 1, userId: 1, text: 'Hello world' },
    { id: 2, userId: 2, text: 'Another post' }
  ]);
});

app.listen(PORT, () => console.log(`Posts service running on ${PORT}`));
