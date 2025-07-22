const sequelize = require('./config/db');
const app = require('./app');
const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Don’t force in production!
    console.log('✅ DB connected and synced');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  } catch (error) {
    console.error('❌ Error starting server:', error);
  }
})();
