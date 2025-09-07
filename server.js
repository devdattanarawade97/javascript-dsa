const express = require('express');
const mongoose = require('mongoose'); // Assuming mongoose is needed and not yet imported
const bodyParser = require('body-parser'); // Assuming body-parser is needed for JSON requests

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(express.json()); // Alternative/additional express built-in body parser

// --- Start Mongoose Connection (Add this if not already present) ---
const DB_URI = 'mongodb://localhost:27017/mydatabase'; // <<< CHANGE THIS TO YOUR ACTUAL MONGODB URI
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false, // Deprecated in Mongoose 6, not needed for 7+
  // useCreateIndex: true,    // Deprecated in Mongoose 6, not needed for 7+
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));
// --- End Mongoose Connection ---


// Import blog post controller functions
const {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} = require('./src/functions/blogPost');

// --- Blog Post API Routes ---
app.post('/api/blogposts', createBlogPost);
app.get('/api/blogposts', getAllBlogPosts);
app.get('/api/blogposts/:id', getBlogPostById);
app.put('/api/blogposts/:id', updateBlogPost);
app.delete('/api/blogposts/:id', deleteBlogPost);
// --- End Blog Post API Routes ---


// Basic route for testing server status
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});