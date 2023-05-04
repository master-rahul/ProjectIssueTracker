const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');

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
    return response.send("HELLO");
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