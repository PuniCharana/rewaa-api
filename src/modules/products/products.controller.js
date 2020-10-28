const { STATUS_CODE } = require('../../core/constants');
const Product = require('./products.model');
/**
 * POST: Add new Product
 */
exports.addProduct = async (req, res, next) => {
    // TODO: Validate request
    // Create a Product
    const product = new Product(req.body);

    // Save Product in the database
    Product.create(product, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        else res.send(data);
    });
};

/**
 * GET: Get Products
 */
exports.getProducts = async (req, res, next) => {
    Product.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

/**
 * GET: Get Product by ID
 */
exports.getProduct = async (req, res, next) => {
    Product.findById(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Product with id " + req.params.id
                });
            }
        } else res.send(data);
    });
};

/**
 * DELETE: Delete Product by ID
 */
exports.deleteProduct = async (req, res, next) => {
    const ids = req.query.ids.split(',');
    Product.remove(ids, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Product with id ${ids}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Product with id " + ids
                });
            }
        } else res.send({ message: `Product was deleted successfully!` });
    });
};

/**
 * PATCH: Update Product
 */
exports.updateProduct = async (req, res, next) => {
    // TODO
};