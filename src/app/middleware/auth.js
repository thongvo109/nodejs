const jwt = require('jsonwebtoken');

exports.requireLogin = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];

            const decode = jwt.verify(token, process.env.JWT_KEY);
            req.user = decode;
            next();
        } else {
            return res.status(400).json({ messeage: 'Authorization invalid' });
        }
    } catch (err) {
        console.log('Something went wrong');
    }
};
