const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Added for general path handling if needed, good practice.

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Import blog post routes
const blogPostRouter = require('./src/functions/blogPost');

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/blogdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// Basic route
app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Use blog post routes
app.use('/api/blogposts', blogPostRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});