const mongoose = require('mongoose');
const User = require('./user');
const Project = require('./project');
const IssueType = require('./issueType');
const Status = require('./status');
const Comment = require('./comment');
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
module.exports = Issue;