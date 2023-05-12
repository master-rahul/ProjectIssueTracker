const mongoose = require('mongoose');    // fetching the mongoose module.

// The model is to list the types of issues that can be generated for the project.
const issueTypeSchema = new mongoose.Schema({
    bug: {
        type: Boolean,
        required: true,
        default: false
    },
    design: {
        type: Boolean,
        required: true,
        default: false
    },
    css: {
        type: Boolean,
        required: true,
        default: false
    },
    database: {
        type: Boolean,
        required: true,
        default: false
    },
    session: {
        type: Boolean,
        required: true,
        default: false
    },
    data: {
        type: Boolean,
        required: true,
        default: false
    },
    vulnerability: {
        type: Boolean,
        required: true,
        default: false
    },
    responseTime: {
        type: Boolean,
        required: true,
        default: false
    }

}, { timestamps: true });


const IssueType = mongoose.model('IssueType', issueTypeSchema);
module.exports = IssueType;    // Exporting the Schema for global access.