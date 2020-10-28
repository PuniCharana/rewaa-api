const express = require('express');
const routes = require('../routes/v1');
const bodyParser = require('body-parser');
const cors = require('cors');
// const error = require('../core/middleware/error');
require('dotenv').config();
const {
  STATUS_CODE
} = require('../core/constants');
const app = express();


// CORS
app.use(cors());

// Parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// Routes
app.use('/v1', routes);

/**
 * ERROR HANDLERS
 * NOTE: The error handler needs to be after the routes
 * and the notFound should be the last on order to handle 404
 */
// app.use(error.errorHandler);
// app.use(error.notFound);

module.exports = app;