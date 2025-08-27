const express = require('express');
const app = express();
const port = 3000; // You can change this port number

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for the homepage
app.get('/', (req, res) => {
  res.send('Hello from your Express.js backend!');
});

// Example of another route
app.get('/api/data', (req, res) => {
  res.json({ message: 'This is some data from the API', timestamp: new Date() });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});