const mongoose = require('mongoose');
const TodoSchema = new mongoose.Schema({
	name: 'String',
	description: 'String',
	finished: 'Boolean',
	finishedAt: 'Date'
});

const ToDo = mongoose.model('todos', TodoSchema);

module.exports = ToDo;