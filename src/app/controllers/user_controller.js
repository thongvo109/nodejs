const User = require('../models/user');
const bcrypt = require('bcryptjs');

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
                .json({ message: 'user created successfully' });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = new UserController();
