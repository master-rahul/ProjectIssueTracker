const mongoose = require('mongoose');                // fetching the mongoose module.
const User = require('./user');                     // fetching the user model
const Project = require('./project');                   // fetching the project model
const IssueType = require('./issueType');               // fetching the issueType model
const Status = require('./status');                     // fetching the status model
const Comment = require('./comment');                   // fetching the comment model


// This model is used to store the issue for a project and holds all the necessary data for it like
// title, description, owner, status, type, author, project, comment.
const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
        required: true,
       
    },
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    },
    status : {
        type : String,
        required : true
    },
    type: {
        type: String,
        
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique : true
        
    }],
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        required : true,
    },
    comment :[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Comment'
    }]
}, { timestamps: true });

const Issue = mongoose.model('Issue', issueSchema);
module.exports = Issue;    // Exporting the Schema for global access.