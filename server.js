const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors'); // Import cors
const connectDB = require('./src/db/connection');
const blogPostRoutes = require('./src/routes/blogPostRoutes');
const userRoutes = require('./src/routes/userRoutes');
const commentRoutes = require('./src/routes/commentRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');
const app = express();

// Load environment variables
dotenv.config({ path: './.env' });
const port = process.env.PORT || 3000;

// Connect to the database
connectDB();

// CORS Configuration - Allows requests from your frontend domain
// You can make this more restrictive in production
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? 'https://yourfrontenddomain.com' : '*', // Replace with your actual frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies to be sent with requests
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions));

// HTTP Request Logger - Only log in development mode for more verbose output
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API!');
});

// Use blog post routes
app.use('/api/posts', blogPostRoutes);

// Use user routes
app.use('/api/users', userRoutes);

// Use comment routes
app.use('/api/posts/:blogPostId/comments', commentRoutes);
app.use('/api/comments', commentRoutes);

// Error Handling Middlewares - MUST be placed after all routes
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});