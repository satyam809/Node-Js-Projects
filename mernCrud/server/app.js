const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const itemRoutes = require('./routes/itemRoutes');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Failed to connect to the database', err);
    process.exit();
});
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api/items', itemRoutes);

// Start the server
app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
});
