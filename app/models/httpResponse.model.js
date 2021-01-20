function HttpResponse() {
	this.code;
	this.success;
	this.type;
	this.numItems;
	this.message;
}

HttpResponse.prototype.newResponse = (code, success, type, message, numItems) => {
	this.code = code;
	this.success = success;
	this.type = type;
	this.message = message;
	this.numItems = numItems || null;
}

HttpResponse.prototype.setStatusCode = (code) => {
	this.code = code;
}

HttpResponse.prototype.setSuccessValue = (success) => {
	this.success = success;
}

HttpResponse.prototype.setMessage = (type, message) => {
	this.type = type;
	this.message = message;
}

HttpResponse.prototype.getStatusCode = () => {
	return this.code;
}

HttpResponse.prototype.getMessage = () => {
	let returnMessage = {
		success: this.success,
		[this.type]: this.message
	};

	if (!!this.numItems) {
		returnMessage = {
			numItems: this.numItems,
			...returnMessage
		}
	}

	return returnMessage;
}


module.exports = HttpResponse;