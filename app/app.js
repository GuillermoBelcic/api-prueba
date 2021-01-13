require('dotenv').config();
const db = require('./config/db');

const express = require("express");
const app = express();

const port = process.env.PORT || 9999;
const routes = require('./routes');

// Get routes
app.get('*', routes);

// Start service
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);

    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => console.log("MongoDB-Atlas Connection Successful!"));
});



