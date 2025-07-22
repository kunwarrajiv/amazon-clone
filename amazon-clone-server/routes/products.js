const express = require('express');
const router = express.Router();
const { Product } = require('../models');

// GET /api/products — fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll(); // Fetch from DB
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;
