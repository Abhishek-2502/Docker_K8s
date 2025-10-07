const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// Configurable via env or default service names (K8s DNS)
const USERS_URL = process.env.USERS_SERVICE_URL || 'http://users-svc.microapp.svc.cluster.local:8080';
const POSTS_URL = process.env.POSTS_SERVICE_URL || 'http://posts-svc.microapp.svc.cluster.local:8080';
const PORT = process.env.PORT || 8080;

app.get('/health', (req, res) => res.send('OK'));

app.get('/api/users', async (req, res) => {
  try {
    const r = await axios.get(`${USERS_URL}/users`);
    res.json(r.data);
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch users', details: err.message });
  }
});

app.get('/api/posts', async (req, res) => {
  try {
    const r = await axios.get(`${POSTS_URL}/posts`);
    res.json(r.data);
  } catch (err) {
    res.status(502).json({ error: 'Failed to fetch posts', details: err.message });
  }
});

app.listen(PORT, () => console.log(`API Gateway listening on ${PORT}`));
