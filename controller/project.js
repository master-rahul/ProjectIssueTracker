const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
const IssueType = require('../models/issueType');
const Issue = require('../models/issue');

module.exports.add = async function (request, response) {
    console.log(request.body);
    var techStackObject = {};
    var projectTypeObject = {};
    projectTypeObject[request.body.projectType] = true;
    for (var i = 0; i < request.body.techStack.length; i++) techStackObject[request.body.techStack[i]] = true;
    const techStack = await TechStack.create(techStackObject);
    const projectType = await ProjectType.create(projectTypeObject);
    const project = await Project.create({
        name: request.body.projectName,
        description: request.body.projectDescription,
        owner : request.body.ownerList,
        author : request.body.authorList,
        techStack : techStack,
        type : projectType
    });
   
    return response.redirect('back');
}
module.exports.edit = async function (request, response) {
    return response.send("HELLO");
}
module.exports.update = async function (request, response) {
    return response.send("HELLO");
}
module.exports.assign = async function (request, response) {
    return response.send("HELLO");
}
module.exports.close = async function (request, response) {
    return response.send("HELLO");
}
module.exports.open = async function (request, response) {
    var schema = TechStack.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = ProjectType.schema;
    var techStackFields = Object.keys(schema.obj);
    var project = await Project.findById(request.params.id).populate({
        path: 'author issue owner'
    }).populate({
        path: 'type',
        model: 'ProjectType',
        match: { $or: [{ webApplication: true }, { desktopApplication: true }, { androidApplication: true }, { iosApplication: true }, { emmbeddedApplication: true }, { networkApplication: true }, { legacyApplication: true }, { restAPI: true }] }
    }).populate({
        path :'techStack',
        model : 'TechStack',
        match: { $or: [{ java: true },{ html: true },{ css: true },{node : true},{express : true},{ mongo: true },{ mongoose: true },{ ejs: true },{ python: true },{ passport: true },{ redis: true },{ nginx: true },{ websocket: true }]}
    });
    var schema1= IssueType.schema;
    var issyeTypeFields = Object.keys(schema1.obj);
    schema1 = IssueType.schema;
    var issueTypeList = Object.keys(schema1.obj);
    var userList = await User.find();
    var issueList = await Issue.find({project : request.params.id}).populate('author owner');
    console.log(issueList);
    return response.render('project', { projectId : request.params.id, getRandomColor: getRandomColor, projectTypeFields: projectTypeFields, techStackFields: techStackFields, project: project, userList: userList, issueTypeList : issueTypeList, issueList : issueList });
    //return response.render("project");
}
module.exports.pending = async function (request, response) {
    return response.send("HELLO");
}
module.exports.backlog = async function (request, response) {
    return response.send("HELLO");
}
module.exports.delete = async function (request, response) {
    return response.send("HELLO");
}

const getRandomColor = () => {

    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

};