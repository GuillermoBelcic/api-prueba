const express = require("express");
const router = express.Router();

const mainController = require('./controllers/main.controller');

router
    .get('/', mainController.testMain)
    .get('/test/', mainController.testParams)
    .get('/test/:id', mainController.testParams)
	.get('/users', mainController.getUsers)
	.post('/exponses', mainController.testParams);


module.exports = router;
