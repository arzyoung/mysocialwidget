const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample posts array with likes and comments
const posts = [
  { title: 'Hello World!', content: 'This is my first post.', likes: 0, comments: [] },
  { title: 'Another Post', content: 'Check out this cool content!', likes: 0, comments: [] }
];

// GET route to fetch posts
app.get('/api/posts', (req, res) => {
  res.json(posts);
});

// POST route to add a new post
app.post('/api/posts', (req, res) => {
  const newPost = { ...req.body, likes: 0, comments: [] };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// POST route to like a post
app.post('/api/posts/like', (req, res) => {
  const { title } = req.body;
  const post = posts.find(p => p.title === title);
  if (post) {
    post.likes += 1;
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// POST route to add a comment to a post
app.post('/api/posts/comment', (req, res) => {
  const { title, comment } = req.body;
  const post = posts.find(p => p.title === title);
  if (post) {
    post.comments.push(comment);
    res.status(200).json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
