const ToDo = require('./../models/todo.model');

exports.getTodos = async (req, res) => {
	const response = await ToDo.find();
    res.status(200).json(response);
};

exports.newTodo = (req, res) => {
	const queryParams = req.body;
	const toDo = new ToDo({
		name: queryParams.name,
		description: queryParams.description || '',
		finished: false,
		finishedAt: null
	});

	console.log(toDo)
	toDo.save((err, doc) => {
		let statusCode = 100;
		let message = {};
		if (err) {
			statusCode = 500;
			message = { 
				success: false,
				error: err 
			};
		} else {
			statusCode = 201;
			message = { 
				success: true,
				newDoc: doc
			 };
		}

		res.status(statusCode).json(message);
	});
    
};