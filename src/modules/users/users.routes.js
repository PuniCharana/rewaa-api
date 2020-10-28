const router = require('express').Router();
const controller = require('./users.controller');

router.route('/').post(controller.addUser);
router.route('/').get(controller.getUsers);
router.route('/:id').get(controller.getUser);
router.route('/:id').delete(controller.deleteUser);

module.exports = router;