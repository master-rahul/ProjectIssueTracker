const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
const IssueType = require('../models/issueType');
const Issue = require('../models/issue');
const Comment = require('../models/comment');
module.exports.add = async function(request, response){
    console.log(request.body);
    if(request.body.edit == 'true'){
        const issue = await Issue.findByIdAndUpdate(request.body.issueId,{
            title: request.body.title,
            description: request.body.description,
            owner: request.body.owner,
            status: request.body.status,
            type: request.body.issueType,
            project: request.body.projectId
        });
    }else{
        const issue = await Issue.create({
            title: request.body.title,
            description: request.body.description,
            owner: request.body.owner,
            status: 'open',
            type: request.body.issueType,
            project: request.body.projectId
        });
        const project = await Project.findByIdAndUpdate(request.body.projectId, { $push: { issue: issue } });
    }
    return response.redirect('back');
}
module.exports.edit = async function (request, response) {
    return response.send('HELLO');
}
module.exports.update = async function (request, response) {
    return response.send('HELLO');
}
module.exports.comment = async function (request, response) {
    console.log(request.body);
    try{
        const comment = await Comment.create({
            data: request.body.content,
            user: request.body.owner,
        });
        const issue = await Issue.findByIdAndUpdate(request.params.id, {$push : {author : request.body.owner} });
        issue = await Issue.findByIdAndUpdate(request.params.id, {$push : {comment : comment}});
        issue = await Issue.findByIdAndUpdate(request.params.id, {status : request.body.status});
        return response.redirect('back');
    }catch(error){
        request.flash('error', 'Error in Issue Name/Description (Repetition)');
        return response.redirect('back');
    }
   
    
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
module.exports.delete = async function (request, response) {
    const issue = await Issue.findByIdAndDelete(request.params.issueId);
    const project = await Project.findByIdAndUpdate(request.params.projectId, {$pull : {issue : request.params.issueId}});
    return response.redirect('back');
}