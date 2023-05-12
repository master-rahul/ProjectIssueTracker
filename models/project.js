const mongoose = require('mongoose');               // to fecth mongoose module
const User = require('./user');                     // to fetch user model
const Issue = require('./issue');                    // to fetch issue model
const ProjectType = require('./projectType');          // to fetch projecType model
const TechStack = require('./techStack');                  // to fetch techStack model


//This schema is used to store the data for a project along with the issueList, author, owner, type.
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
    techStack :[{
        type : String,
        required : true
    }],
    type: {
        type: String,
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

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;                   // Exporting the Schema for global access.

