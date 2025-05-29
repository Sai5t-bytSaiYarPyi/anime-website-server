const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Allows frontend to call backend
app.use(express.json()); // Parses JSON requests

// Routes
app.use('/api/anime', require('./routes/animeRoutes'));

// Test route
app.get('/', (req, res) => {
  res.send('Anime Streaming API is running');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));