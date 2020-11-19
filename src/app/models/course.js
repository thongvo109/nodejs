const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema(
    {
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
    {
        timestamps: true,
    },
);
// Add plug in
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true });
module.exports = mongoose.model('Course', Course);
