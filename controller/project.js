const TechStack = require('../models/techStack');         // fetching TechStack Model
const User = require('../models/user');                      // fetching user Model
const ProjectType = require('../models/projectType');            // fetching ProjectType Model
const Project = require('../models/project');                    // fetching Project Model    
const IssueType = require('../models/issueType');                // fetching IssueType Model
const Issue = require('../models/issue');                        // fetching Issue Model
const Comment = require('../models/comment');                    // fetching Comment Model


// Used to create a new project 
module.exports.add = async function (request, response) {
    console.log(request.body);
    
    const project = await Project.create({
        name: request.body.projectName,
        description: request.body.projectDescription,
        owner : request.body.ownerList,
        author : request.body.authorList,
        techStack : request.body.techStack,
        type : request.body.projectType
    });
   
    return response.redirect('back');
}
// Used to open a project with all the issue under it.
module.exports.open = async function (request, response) {
    var schema = TechStack.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = ProjectType.schema;
    var techStackFields = Object.keys(schema.obj);
    var project = await Project.findById(request.params.id).populate({
        path: 'author issue owner'
    }).populate({
        path: 'type',
    }).populate({
        path :'techStack',
    });
    var schema1= IssueType.schema;
    var issyeTypeFields = Object.keys(schema1.obj);
    schema1 = IssueType.schema;
    var issueTypeList = Object.keys(schema1.obj);
    var userList = await User.find();
    var issueList = await Issue.find({project : request.params.id}).populate('author owner').populate({path : 'comment', options : {
        populate : 'user'
    }
    });
    issueList.sort((a, b) => {
        const statusOrder = {
            open: 1,
            inProgress: 2,
            pending: 3,
            closed: 5,
            completed: 4,
        };
        return statusOrder[a.status] - statusOrder[b.status];
    });
    return response.render('project', { projectId : request.params.id, getRandomColor: getRandomColor, projectTypeFields: projectTypeFields, techStackFields: techStackFields, project: project, userList: userList, issueTypeList : issueTypeList, issueList : issueList });
    //return response.render("project");
}

// Displays the list of project based upon projectFilter form data
// Has 5 parameters of filter.
module.exports.filter = async function (request, response) {
    const { issueType, owner, author, status, projectId } = request.body;

    // Build query object based on form input
    const query = {};
    if (projectId) {
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


// const getRandomColor = () => {

//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;

// };

// For generating random colors.
const getRandomColor = () => {
    const colors = [ "green", "orange", "lightgreen", "silver", "grey", "brown"]; // light blue, orange, parrot
    return colors[Math.floor(Math.random() * colors.length)];
    // , , ,
    //
};