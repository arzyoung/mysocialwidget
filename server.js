const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

let posts = [
    { title: 'Hello World!', content: 'This is my first post.' },
    { title: 'Another Post', content: 'Check out this cool content!' }
];

// Endpoint to get posts
app.get('/api/posts', (req, res) => {
    res.json(posts);
});

// Endpoint to add a new post
app.post('/api/posts', express.json(), (req, res) => {
    const newPost = req.body;
    posts.push(newPost);
    res.status(201).json(newPost);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
