const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Review = sequelize.define('Review', {
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  },
  comment: DataTypes.TEXT
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = Review;
