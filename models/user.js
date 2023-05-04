const mongoose = require('mongoose');
const Issue = require('./issue');
const Project = require('./project');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    projectOwner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project'
    }],
    issueOwner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Issue'
    }],
    project : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    }],
    issue : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Issue'
    }]
}, { timestamps: true });  

const User = mongoose.model('User', userSchema);
module.exports = User;