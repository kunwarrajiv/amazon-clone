const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const CartItem = sequelize.define('CartItem', {
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  },
  added_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: false
});

module.exports = CartItem;
