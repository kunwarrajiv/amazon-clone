// Import all models and database connection
const { User, Product, Order, OrderItem, CartItem, Review } = require('./models');
const sequelize = require('./config/db');

// Wrap the seed logic in an async function
function seedDatabase() {
  // Connect to the database and sync models
  sequelize.sync({ force: true }) // Recreate tables
    .then(() => {
      console.log('✅ Database synced. Seeding data...');

      // Step 1: Create Users
      return Promise.all([
        User.create({
          name: 'John Doe',
          email: 'john@example.com',
          password_hash: 'hashedpassword1', // You can replace with bcrypt hash
          is_admin: false
        }),
        User.create({
          name: 'Jane Admin',
          email: 'jane@example.com',
          password_hash: 'hashedpassword2',
          is_admin: true
        })
      ]);
    })
    .then(([user1, user2]) => {
      console.log('✅ Users created');

      // Step 2: Create Products
      return Promise.all([
        Product.create({
          name: 'iPhone 14',
          description: 'Latest Apple smartphone',
          price: 999.99,
          stock: 10,
          image_url: 'https://example.com/iphone14.jpg'
        }),
        Product.create({
          name: 'Samsung Galaxy S22',
          description: 'Samsung flagship phone',
          price: 899.99,
          stock: 15,
          image_url: 'https://example.com/samsung.jpg'
        }),
        Product.create({
          name: 'Sony WH-1000XM5',
          description: 'Noise Cancelling Headphones',
          price: 349.99,
          stock: 20,
          image_url: 'https://example.com/sony.jpg'
        })
      ]).then(products => ({ user1, user2, products })); // return for next .then
    })
    .then(({ user1, user2, products }) => {
      console.log('✅ Products created');
      console.table(user1, user2, products);


      // Step 3: Create an Order for user1
      return Order.create({
        userId: user1.id,
        total: 999.99 + (349.99 * 2),
        status: 'completed'
      }).then(order => ({ user1, products, order }));
    })
    .then(({ user1, products, order }) => {
      console.log('✅ Order created');
      console.table(user1, products, order);

      // Step 4: Add Order Items to the Order
      return Promise.all([
        OrderItem.create({
          orderId: order.id,
          productId: products[0].id,
          quantity: 1,
          price: 999.99
        }),
        OrderItem.create({
          orderId: order.id,
          productId: products[2].id,
          quantity: 2,
          price: 349.99
        })
      ]).then(() => ({ user1, products }));
    })
    .then(({ user1, products }) => {
      console.log('✅ Order Items created');
      console.table(user1, products);

      // Step 5: Add items to Cart
      return Promise.all([
        CartItem.create({
          userId: user1.id,
          productId: products[1].id,
          quantity: 2
        })
      ]);
    })
    .then(() => {
      console.log('✅ Cart item(s) created');

      // Step 6: Add Reviews
      return Promise.all([
        Review.create({
          userId: 1,
          productId: 1,
          rating: 5,
          comment: 'Amazing phone!'
        }),
        Review.create({
          userId: 2,
          productId: 3,
          rating: 4,
          comment: 'Great sound, but pricey.'
        })
      ]);
    })
    .then(() => {
      console.log('✅ Reviews created');
      console.log('🎉 Seeding complete!');
      process.exit();
    })
    .catch(err => {
      console.error('❌ Error seeding database:', err);
      process.exit(1);
    });
}

seedDatabase();
