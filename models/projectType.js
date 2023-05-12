const mongoose = require('mongoose');               // to fetch mongoose module
const Project = require('./project');               // to fetch project model

// This schema is used to store the projectType of the model. 
const projectTypeSchema = new mongoose.Schema({
    webApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    desktopApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    androidApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    iosApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    emmbeddedApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    networkApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    legacyApplication: {
        type: Boolean,
        required: true,
        default: false
    },
    restAPI: {
        type: Boolean,
    },

}, { timestamps: true });


const ProjectType = mongoose.model('ProjectType', projectTypeSchema);
module.exports = ProjectType;           // Exporting the Schema for global access.