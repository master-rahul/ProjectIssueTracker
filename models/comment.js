const mongoose = require('mongoose');
const User = require('./user');
const commentSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true,
       
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;