const mongoose = require('mongoose');

// Define the Blog Post Schema
const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    // MaxLength validation as per your provided JSON schema
    maxlength: [50, 'Content cannot exceed 50 characters.'],
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the Blog Post model
const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Controller functions for CRUD operations

// Create a new blog post
const createBlogPost = async (req, res) => {
  try {
    const newPost = new BlogPost(req.body);
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

// Get all blog posts
const getAllBlogPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single blog post by ID
const getBlogPostById = async (req, res) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog post by ID
const updateBlogPost = async (req, res) => {
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );
    if (!updatedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    if (error.name === 'ValidationError') {
        return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog post by ID
const deleteBlogPost = async (req, res) => {
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
};