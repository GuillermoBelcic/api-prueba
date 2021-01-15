const express = require("express");
const router = express.Router();

const mainController = require('./controllers/main.controller');
const todoController = require('./controllers/todo.controller');

router.route('/').get(mainController.testMain);
// router.route('/test').get(mainController.testParams);
// router.route('/test/:id').get(mainController.testParams);
// router.route('/users').get(mainController.getUsers);
// router.route('/expenses').post(mainController.setExpense);
router.route('/todo')
.get(todoController.getTodos)
.post(todoController.newTodo);


module.exports = router;
