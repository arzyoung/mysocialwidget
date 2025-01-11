const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const posts = [
  { title: 'Hello World!', content: 'This is my first post.' },
  { title: 'Another Post', content: 'Check out this cool content!' },
];

// GET route
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// POST route
app.post('/api/posts', (req, res) => {
  const newPost = req.body;
  posts.push(newPost);
  res.status(201).json(newPost);
});

// ✅ Ensure the PORT uses Render's provided environment variable
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
