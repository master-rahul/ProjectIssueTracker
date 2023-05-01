const mongoose = require('mongoose');
const User = require('./user');
const Issue = require('./issue');
const ProjectType = require('./projectType');
const TechStack = require('./techStack');
const projectSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
        unique : true
    }, 
    owner: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }],
    techStack :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'TechStack',
        required : true
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProjectType',
        required: true,
    },
    author : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'  
    }],
    issue: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Issue'
    }]
}, {timestamps : true});

const ProjectSchema = mongoose.model('ProjectSchema', projectSchema);
module.exports = ProjectSchema;

