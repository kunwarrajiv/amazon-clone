const express = require('express');
const router = express.Router();
const { Order, OrderItem } = require('../models');

// GET /api/orders/:userId — get orders for a user
router.get('/:userId', async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { userId: req.params.userId },
      include: OrderItem
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get orders' });
  }
});

// POST /api/orders — place a new order
router.post('/', async (req, res) => {
  const { userId, items, total } = req.body;

  try {
    const order = await Order.create({ userId, total });
    await Promise.all(items.map(item => OrderItem.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    })));

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(400).json({ error: 'Failed to place order' });
  }
});

module.exports = router;
