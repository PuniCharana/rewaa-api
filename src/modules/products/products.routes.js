const router = require('express').Router();
const controller = require('./products.controller');

router.route('/').post(controller.addProduct);
router.route('/').get(controller.getProducts);
router.route('/:id').get(controller.getProduct);
router.route('/:id').put(controller.updateProduct);
router.route('/').delete(controller.deleteProduct);

module.exports = router;