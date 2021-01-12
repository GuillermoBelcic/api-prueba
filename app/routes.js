const express = require("express");
const router = express.Router();

const mainController = require('./controllers/main.controller');

router.get('/', mainController.testMain);

router.get('/test/:id', mainController.testParams);

module.exports = router;
