const express = require('express');
const app = express();
const port = 3000; // Or whatever port you prefer

// Import the new blog post routes
const blogPostsRouter = require('./src/functions/blogPosts');

// Middleware to parse JSON request bodies
app.use(express.json());

// Existing routes (if any) can go here
// Example:
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

// Use the blog post routes
app.use('/api/posts', blogPostsRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});