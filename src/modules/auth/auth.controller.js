const {
    STATUS_CODE
} = require('../../core/constants');
const User = require('../users/users.model')

/**
 * POST: Login User
 */
exports.login = async (req, res, next) => {
    User.authenticate(req.body.email, req.body.password, (err, data) => {
        if (err) {
            res.status(400).send({
                message: "email/password combination does not match"
            });
        } else res.send(data);
    })
};