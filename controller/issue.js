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
module.exports.filter = async function (request, response) {
    const { issueType, owner, author, status, projectId } = request.body;

    // Build query object based on form input
    const query = {};
    if (projectId){
        query.project = projectId;
    }
    if (issueType) {
        query.type = issueType;
    }
    if (owner) {
        query.owner = owner;
    }
    if (author) {
        query.author = { $in: author };
    }
    if (status) {
        query.status = status;
    }
    console.log(query);
    const issues = await Issue.find(query)
        .populate('owner')
        .populate('author')
        .populate('project')
        .populate({
            path: 'comment',
            populate: { path: 'user' },
        });
    //console.log(issues);

    

    var schema = TechStack.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = ProjectType.schema;
    var techStackFields = Object.keys(schema.obj);
    var project = await Project.findById(request.params.id).populate({
        path: 'author issue owner'
    }).populate({
        path: 'type',
       
    }).populate({
        path: 'techStack',
       
    });
    var schema1 = IssueType.schema;
    var issyeTypeFields = Object.keys(schema1.obj);
    schema1 = IssueType.schema;
    var issueTypeList = Object.keys(schema1.obj);
    var userList = await User.find();
    console.log(project);
    return response.render('project', { projectId: request.params.id, getRandomColor: getRandomColor, projectTypeFields: projectTypeFields, techStackFields: techStackFields, project: project, userList: userList, issueTypeList: issueTypeList, issueList: issues });
    //return response.render("project");
}
module.exports.update = async function (request, response) {
    return response.send('HELLO');
}
module.exports.comment = async function (request, response) {
    console.log(request.body);
    projectId = request.body.projectId;
    try{
        const comment = await Comment.create({
            data: request.body.content,
            user: request.body.owner,
        });
        const issue = await Issue.findByIdAndUpdate(request.params.id, { $push: { author: request.body.owner }, $push: { comment: comment }, status : request.body.status });
        return response.redirect(`/project/open/${projectId}`);
    }catch(error){
        request.flash('error', 'Error in Issue Name/Description (Repetition)');
        return response.redirect(`/project/open/${projectId}`);
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

const getRandomColor = () => {
    const colors = ["green", "orange", "lightgreen", "silver", "grey", "brown"]; // light blue, orange, parrot
    return colors[Math.floor(Math.random() * colors.length)];
    // , , ,
    //
};