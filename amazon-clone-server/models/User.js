const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password_hash: DataTypes.TEXT,
  is_admin: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = User;
