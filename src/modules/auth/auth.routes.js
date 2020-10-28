const router = require('express').Router();
const controller = require('./auth.controller');

router.route('/').post(controller.login);

module.exports = router;