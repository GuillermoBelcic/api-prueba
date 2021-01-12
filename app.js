const express = require("express");
const app = express();
const port = process.env.PORT || 9999;
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.listen(port, function() {
    console.log(`Server listening on port ${port}`);
});
