exports.testMain = (req, res) => {
    const response = {
        message: 'Hello World'
    };
    res.status(200).json(response);
};

exports.testParams = (req, res) => {
    console.log(req.params)

    const response = {
        message: 'hello params',
        params: req.params.id
    }
    res.status(200).json(response);
};
