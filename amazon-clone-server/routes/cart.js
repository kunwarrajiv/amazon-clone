const express = require('express');
const router = express.Router();
const { CartItem, Product } = require('../models');

// POST /api/cart — add item to cart
router.post('/', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const item = await CartItem.create({ userId, productId, quantity });
    res.status(201).json(item);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add to cart' });
  }
});

// GET /api/cart/:userId — fetch user’s cart
router.get('/:userId', async (req, res) => {
  try {
    const items = await CartItem.findAll({
      where: { userId: req.params.userId },
      include: Product
    });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

module.exports = router;
