const express = require('express');
const router = express.Router();

let blogPosts = [
  // BugFix: Added 'title' property for consistency
  { id: 1, title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { id: 2, title: 'Second Blog Post', content: 'This is the content of the second blog post.' }
];

// Get all blog posts
router.get('/', (req, res) => {
  res.json(blogPost);
});
//thanks

// Get a single blog post by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const post = blogPosts.find(p => p.id === id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Blog post not found');
  }
});

// Create a new blog post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).send('Title and content are required');
  }
  const newPost = { id: blogPosts.length > 0 ? Math.max(...blogPosts.map(p => p.id)) + 1 : 1, title, content };
  blogPosts.push(newPost);
  res.status(201).json(newPost);
});

// Update an existing blog post
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const postIndex = blogPosts.findIndex(p => p.id === id);

  if (postIndex !== -1) {
    if (!title || !content) {
      return res.status(400).send('Title and content are required');
    }
    blogPosts[postIndex] = { ...blogPosts[postIndex], title, content };
    res.json(blogPosts[postIndex]);
  } else {
    res.status(404).send('Blog post not found');
  }
});

// Delete a blog post
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = blogPosts.length;
  blogPosts = blogPosts.filter(p => p.id !== id);

  if (blogPosts.length < initialLength) {
    res.status(204).send(); // No Content
  } else {
    res.status(404).send('Blog post not found');
  }
});

module.exports = router;