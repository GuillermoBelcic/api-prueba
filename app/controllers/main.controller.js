const User = require('./../models/user.model');

exports.testMain = (req, res) => {
    const response = {
        message: 'Hello World'
    };
    res.status(200).json(response);
};

exports.testParams = (req, res) => {
    console.log('params:', req.params);
    console.log('query:', req.query);

    const response = {
        message: 'hello params',
		params: req.params.id || 'no params send',
		query: req.query || 'no query'
    };
    res.status(200).json(response);
};

exports.getUsers = async (req, res) => {
    const allUsers = await User.find();
    res.status(200).json(allUsers);
}
