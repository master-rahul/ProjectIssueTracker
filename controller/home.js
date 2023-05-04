const TechStack = require('../models/techStack');
const User = require('../models/user');
const ProjectType = require('../models/projectType');
const Project = require('../models/project');
module.exports.home = async function(request, response) {
    var schema = TechStack.schema;
    var projectTypeFields = Object.keys(schema.obj);
    schema = ProjectType.schema
    var techStackFields = Object.keys(schema.obj);  
    var projectList = await Project.find({}).populate({
        path: 'author issue'
    }).populate({
        path: 'type',
        model: 'ProjectType',
        match: { $or: [{ webApplication: true }, { desktopApplication: true }, { androidApplication: true }, { iosApplication: true }, { emmbeddedApplication: true }, { networkApplication: true }, { legacyApplication: true }, { restAPI: true }] }
    })
    console.log(projectList)
    // projectList.forEach((project) => {
    //     // Access the populated author data
    //     console.log(project.author);
    //     console.log(project.issue);
    // });  
      var userList = await User.find();
    return response.render('home', { getRandomColor: getRandomColor, projectTypeFields : projectTypeFields, techStackFields : techStackFields, projectList : projectList, userList : userList});
}
const getRandomColor = () => {
   
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    
};