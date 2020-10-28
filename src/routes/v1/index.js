const express = require('express');
const authRoutes = require('../../modules/auth/auth.routes')
const userRoutes = require('../../modules/users/users.routes')
const productRoutes = require('../../modules/products/products.routes')

// Initialization
const router = express.Router();

/**
 * Routes
 */
router.get('/', (req, res) => {
  return res.send('Welcome to Rewaa API');
});
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;