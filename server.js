
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Define a route to handle requests to the root URL
app.get('/', (req, res) => {
  res.send('Hello, SAHYADRI!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
