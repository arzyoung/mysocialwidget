async function loadPosts() {
    const response = await fetch('http://localhost:5000/api/posts');
    const posts = await response.json();

    const feed = document.getElementById('feed');
    feed.innerHTML = ''; // Clear the feed

    posts.forEach(post => {
        const postItem = document.createElement('li');
        postItem.classList.add('feed-item');
        postItem.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
        `;
        feed.appendChild(postItem);
    });
}

async function addPost() {
    const title = document.getElementById('post-title').value;
    const content = document.getElementById('post-content').value;

    if (title && content) {
        const newPost = { title, content };

        // Send the new post to the backend
        await fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });

        // Reload the posts
        loadPosts();

        // Clear inputs
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    } else {
        alert('Please fill in both fields.');
    }
}

// Load posts when the page loads
window.onload = loadPosts;
