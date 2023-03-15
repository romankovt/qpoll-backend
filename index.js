const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/pollify', { useNewUrlParser: true, useUnifiedTopology: true });

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.url} ${res.statusCode} ${duration}ms`);
  });
  next();
};

app.use(logger);

// define routes
const pollsRoutes = require('./src/routes/polls');
app.use('/v1', [pollsRoutes]);

// Get a list of all polls
app.get('/', (req, res) => {
  res.json({ health: "ok" })
});

// Start the server
app.listen(4200, () => console.log('Server running on port 4200'));
