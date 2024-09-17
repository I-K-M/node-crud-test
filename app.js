const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Import routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

// Check if MONGO_URI is defined
if (!process.env.MONGO_URI) {
    throw new Error('Environment variable MONGO_URI is missing.');
}

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Successfully connected to MongoDB!'))
    .catch((error) => console.error('Failed to connect to MongoDB:', error));

// CORS headers
const allowedOrigins = ['https://yourdomain.com', 'https://otherdomain.com'];
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    } else {
        res.setHeader('Access-Control-Allow-Origin', '*'); // Open to all in development
    }
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Middleware for parsing JSON bodies
app.use(express.json());

// Routes
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Global error handler
app.use((error, req, res, next) => {
    console.error(error.stack);
    res.status(500).json({ message: 'An internal server error occurred.' });
});

// Listen on port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;
