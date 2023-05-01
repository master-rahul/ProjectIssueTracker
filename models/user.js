const mongoose = require('mongoose');
const Issue = require('./issue');
const Project = require('./project');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
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

const UserSchema = mongoose.model('UserSchema', userSchema);
module.exports = UserSchema;