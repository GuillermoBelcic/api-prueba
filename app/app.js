require('dotenv').config();
const db = require('./config/db');
const bodyParser = require('body-parser');

const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
        'Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS'
    );
    next();
});

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



