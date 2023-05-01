const mongoose = require('mongoose');
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


const ProjectTypeSchema = mongoose.model('ProjectTypeSchema', projectTypeSchema);
module.exports = ProjectTypeSchema;