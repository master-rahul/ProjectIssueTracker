const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
const IssueType = require('../models/issueType');
const Issue = require('../models/issue');
module.exports.add = async function(request, response){
    console.log(request.body);

    const issue = await Issue.create({
        title : request.body.title,
        description : request.body.description,
        owner : request.body.owner,
        status : 'open',
        type: request.body.issueType,
        project : request.body.projectId
    });
    const project = await Project.findByIdAndUpdate(request.body.projectId,{$push : {issue : issue}});

    return response.redirect('back');
}
module.exports.edit = async function (request, response) {
    return response.send('HELLO');
}
module.exports.update = async function (request, response) {
    return response.send('HELLO');
}
module.exports.assign = async function (request, response) {
    return response.send('HELLO');
}
module.exports.status = async function (request, response) {
    return response.send('HELLO');
}
module.exports.open = async function (request, response) {
    return response.send('HELLO');
}
module.exports.close = async function (request, response) {
    return response.send('HELLO');
}
module.exports.pending = async function (request, response) {
    return response.send('HELLO');
}