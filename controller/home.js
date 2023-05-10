const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
const Issue = require('../models/issue');
module.exports.home = async function(request, response) {
    var schema = ProjectType.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = TechStack.schema;
    var techStackFields = Object.keys(schema.obj);
    var projectList = await Project.find({}).populate({
        path: 'author issue type'
    });
    
    var userList = await User.find();
    var issueList = await Issue.find({ project  : request.params.id})
    return response.render('home', { getRandomColor: getRandomColor, projectTypeFields : projectTypeFields, techStackFields : techStackFields, projectList : projectList, userList : userList, issueList : issueList});
}
module.exports.home1 = async function (request, response) {
    console.log(request.body);
    const query = {};
    const { projectType, owner, author, status, techStack, nameS } = request.body;
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
    var schema = ProjectType.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = TechStack.schema;
    var techStackFields = Object.keys(schema.obj);
    var projectList = await Project.find(query).populate({
        path: 'author issue type'
    })

    var userList = await User.find();
    var issueList = await Issue.find({ project: request.params.id })
    return response.render('home', { getRandomColor: getRandomColor, projectTypeFields: projectTypeFields, techStackFields: techStackFields, projectList: projectList, userList: userList, issueList: issueList });
}
const getRandomColor = () => {
   
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    
};