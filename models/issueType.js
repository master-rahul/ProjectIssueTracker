const mongoose = require('mongoose');
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
    vulnerablity: {
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


const IssueTypeSchema = mongoose.model('IssueTypeSchema', issueTypeSchema);
module.exports = IssueTypeSchema;