const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
const Issue = require('../models/issue');

// For view the homepage for listing all the projects and adding all the projects
module.exports.home = async function(request, response) {
    var schema = ProjectType.schema;                // Fetching the schema
    var projectTypeFields = Object.keys(schema.obj);        // Converting to the schema to the list of fields
    schema = TechStack.schema;                          // Fetching the schema
    var techStackFields = Object.keys(schema.obj);           // Converting to the schema to the list of fields
    var projectList = await Project.find({}).populate({                 // Finding all the projects with poplulated data
        path: 'author issue type'
    });
    
    var userList = await User.find();                   // Fetching all the users
    var issueList = await Issue.find({ project: request.params.id })       // Fetching all the issue for the project
    return response.render('home', { getRandomColor: getRandomColor, projectTypeFields : projectTypeFields, techStackFields : techStackFields, projectList : projectList, userList : userList, issueList : issueList});
}

// For view the homepage for listing all the projects and adding all the projects
// but with a filter view whose data is recieved in request.body
module.exports.home1 = async function (request, response) {
    console.log(request.body);
    const query = {};
    const { projectType, owner, author, status, techStack, nameS } = request.body;  // mapping all the request body objects to variables
    const regex = new RegExp(nameS, 'i');
    if (projectType) {
        query.type = projectType;
    }
    if(nameS){
        query.name = regex;
    }
    if (owner) {
        query.owner = owner;
    }
    if (author) {
        query.author = { $in: author };
    }
    if (techStack) {
        query.techStack = { $in: techStack };
    }
    if (status) {
        query.status = status;
    }   
    var schema = ProjectType.schema;                 // Fetching the schema
    var projectTypeFields = Object.keys(schema.obj);                // Converting to the schema to the list of fields
    schema = TechStack.schema;                       // Fetching the schema
    var techStackFields = Object.keys(schema.obj);               // Converting to the schema to the list of fields
    var projectList = await Project.find(query).populate({        // Finding all the projects with poplulated data
        path: 'author issue type'
    })

    var userList = await User.find();                 // Fetching all the users
    var issueList = await Issue.find({ project: request.params.id })
    return response.render('home', { getRandomColor: getRandomColor, projectTypeFields: projectTypeFields, techStackFields: techStackFields, projectList: projectList, userList: userList, issueList: issueList });
}

// for random colour generator
const getRandomColor = () => {
   
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    
};