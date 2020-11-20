const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserController {
    async register(req, res) {
        const { name, email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ error: 'User already exites' });
            }
            const handed_password = await bcrypt.hash(password, 10);
            user = new User({ name, email, password: handed_password });
            await user.save();
            return res
                .status(200)
                .json({
                    code: 200,
                    message: 'user created successfully',
                    user: user,
                });
        } catch (err) {
            console.log(err.message);
        }
    }
    async login(req, res) {
        const { email, password } = req.body;
        try {
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: 'Invalid User ' });
            }
            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ error: 'Invalid User ' });
            }
            const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY, {
                expiresIn: '1h',
            });

            return res.json({ jwt: token, data: user });
        } catch (err) {
            console.log(err.message);
        }
    }
    async index(req, res) {
        console.log(req.user);
        try {
            const user = await User.findById(req.user._id);
            res.json(user);
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserController();
