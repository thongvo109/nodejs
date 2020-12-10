const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);
const User = new Schema(
    {
        _id: {
            type: Number,
        },
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
    },
    { _id: false, timestamps: true },
);

User.plugin(AutoIncrement, { id: 'user_id', inc_field: '_id' });
User.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
module.exports = mongoose.model('User', User);
