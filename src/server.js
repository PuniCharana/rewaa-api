const app = require('./config/app');
const { DEFAULT_PORT } = require('./core/constants');

const port = process.env.PORT || DEFAULT_PORT;

// Start app
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});