const express = require('express');
const router = express.Router();

// In-memory array to store blog posts (simulating a database)
let blogPosts = [];
let nextId = 1; // Simple ID generator

// Helper for schema validation
const validateBlogPost = (post) => {
    if (!post.title || typeof post.title !== 'string') {
        return 'Title is required and must be a string.';
    }
    if (!post.author || typeof post.author !== 'string') {
        return 'Author is required and must be a string.';
    }
    if (!post.content || typeof post.content !== 'string') {
        return 'Content is required and must be a string.';
    }
    if (post.content.length > 100) {
        return 'Content cannot exceed 100 characters.';
    }
    return null; // No error
};

// GET all blog posts
router.get('/', (req, res) => {
    res.json(blogPosts);
});

// GET a single blog post by ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    const post = blogPosts.find(p => p.id === parseInt(id));

    if (!post) {
        return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(post);
});

// POST a new blog post
router.post('/', (req, res) => {
    const { title, author, content } = req.body;
    const newPost = { title, author, content };

    const validationError = validateBlogPost(newPost);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    newPost.id = nextId++;
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

// PUT (update) an existing blog post by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, author, content } = req.body;
    const postIndex = blogPosts.findIndex(p => p.id === parseInt(id));

    if (postIndex === -1) {
        return res.status(404).json({ message: 'Blog post not found' });
    }

    const updatedPost = { ...blogPosts[postIndex], title, author, content };
    const validationError = validateBlogPost(updatedPost);
    if (validationError) {
        return res.status(400).json({ message: validationError });
    }

    blogPosts[postIndex] = updatedPost;
    res.json(updatedPost);
});

// DELETE a blog post by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = blogPosts.length;
    blogPosts = blogPosts.filter(p => p.id !== parseInt(id));

    if (blogPosts.length === initialLength) {
        return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(204).send(); // No Content
});

module.exports = router;