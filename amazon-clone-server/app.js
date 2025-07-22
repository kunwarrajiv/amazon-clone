const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Import and mount all routes
app.use('/api/products', require('./routes/products'));
app.use('/api/cart', require('./routes/cart'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/reviews', require('./routes/reviews'));

app.get('/', (req, res) => res.send('Amazon Clone API is live!'));

module.exports = app;