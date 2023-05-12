const mongoose = require('mongoose');               // fetching the mongoose module.
const User = require('./user');                     // fetching the user model

// Creating a comment model for holding all the progress on the issue that is being resolved. 
//The comments are added by a user which automatically becomes the author of the issue.
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
module.exports = Comment;     // Exporting the Schema for global access.