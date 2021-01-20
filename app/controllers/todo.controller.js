const ToDo = require('./../models/todo.model');
const HttpResponse = require('./../models/httpResponse.model')

exports.getTodos = (req, res) => {
	ToDo.find()
	.then((response) => {
		const httpCustomResponse = new HttpResponse();
		const numItems = response.length || null;
		httpCustomResponse.newResponse(200, true, 'docs', response, numItems);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	})
	.catch((error) => {
		console.log('error:', error)
		const httpCustomResponse = new HttpResponse();
		httpCustomResponse.newResponse(500, false, 'error', error);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	});
    
};

exports.newTodo = (req, res) => {
	const queryParams = req.body;
	const toDo = new ToDo({
		name: queryParams.name,
		description: queryParams.description || '',
		finished: false,
		finishedAt: null
	});

	toDo.save()
	.then((doc) => {
		const httpCustomResponse = new HttpResponse();
		httpCustomResponse.newResponse(201, true, 'newDoc', doc);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	})
	.catch((error) => {
		console.log('error:', error)
		const httpCustomResponse = new HttpResponse();
		httpCustomResponse.newResponse(500, false, 'error', error);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	});
};

exports.updateTodo = async (req, res) => {
	const queryParams = req.body;
	const updateTodoId = req.params.id || null;

	ToDo.updateOne({ _id: updateTodoId }, {
		name: queryParams.name, 
		description: queryParams.description, 
		finished: queryParams.finished, 
		finishedAt: queryParams.finishedAt
	})
	.then((mongooseResponse) => {
		const httpCustomResponse = new HttpResponse();
		if (mongooseResponse.ok) {
			httpCustomResponse.newResponse(201, true, 'mongooseResponse', mongooseResponse);
		} else {
			httpCustomResponse.newResponse(500, false, 'mongooseResponse', mongooseResponse);
		}

		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	})
	.catch((error) => {
		console.log('error:', error)
		const httpCustomResponse = new HttpResponse();
		httpCustomResponse.newResponse(500, false, 'error', error);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	});
};

exports.deleteTodo = async (req, res) => {
	const deleteTodoId = req.params.id || null;
	ToDo.deleteOne({ _id: deleteTodoId })
	.then((mongooseResponse) => {
		const httpCustomResponse = new HttpResponse();
		if (mongooseResponse.ok) {
			httpCustomResponse.newResponse(202, true, 'mongooseResponse', mongooseResponse);
		} else {
			httpCustomResponse.newResponse(500, false, 'mongooseResponse', mongooseResponse);
		}
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	})
	.catch((error) => {
		console.log('error:', error)
		const httpCustomResponse = new HttpResponse();
		httpCustomResponse.newResponse(500, false, 'error', error);
		res.status(httpCustomResponse.getStatusCode()).json(httpCustomResponse.getMessage());
	});
};