const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');
const OrderItem = require('./OrderItem');
const CartItem = require('./CartItem');
const Review = require('./Review');

// Define associations
User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(CartItem);
CartItem.belongsTo(User);

Product.hasMany(CartItem);
CartItem.belongsTo(Product);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

// Export all models together
module.exports = {
  User,
  Product,
  Order,
  OrderItem,
  CartItem,
  Review
};
