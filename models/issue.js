const mongoose = require('mongoose');
const User = require('./user');
const Project = require('./project');
const IssueType = require('./issueType');
const Status = require('./status');
const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    },
    owner : [{
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required : true
    }],
    status : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Status',
        required : true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'IssueType',
        required: true,
        
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    project: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }]
}, { timestamps: true })

const IssueSchema = mongoose.model('IssueSchema', issueSchema);
module.exports = IssueSchema;