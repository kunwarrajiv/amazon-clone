const express = require('express');
const router = express.Router();
const { Review, User } = require('../models');

// POST /api/reviews — add review
router.post('/', async (req, res) => {
  const { userId, productId, rating, comment } = req.body;
  try {
    const review = await Review.create({ userId, productId, rating, comment });
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ error: 'Failed to add review' });
  }
});

// GET /api/reviews/:productId — get all reviews for product
router.get('/:productId', async (req, res) => {
  try {
    const reviews = await Review.findAll({
      where: { productId: req.params.productId },
      include: User
    });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

module.exports = router;
