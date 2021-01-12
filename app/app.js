const express = require("express");
const app = express();
const port = process.env.PORT || 9999;

const routes = require('./routes')

app.get('*', routes);

app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
