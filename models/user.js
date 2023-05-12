const mongoose = require('mongoose');       // to fetch mongoose module
const Issue = require('./issue');           // to fetch issue model
const Project = require('./project');       // to fetch project model


// This schema store all the user data and the projects and issues associated to it.
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
module.exports = User;              // Exporting the Schema for global access.