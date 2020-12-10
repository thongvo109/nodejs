const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Course = new Schema(
    {
        _id: {
            type: Number,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        slug: {
            type: String,
            slug: 'name',
            unique: true,
        },
        image: {
            type: String,
        },
        videoId: {
            type: String,
            required: true,
        },
        level: {
            type: String,
        },
    },
    { _id: false, timestamps: true },
);
// Add plug in
mongoose.plugin(slug);
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
module.exports = mongoose.model('Course', Course);
