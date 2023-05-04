const mongoose = require('mongoose');
const Project = require('./project');
const techStackSchema = new mongoose.Schema({
    java: {
        type: Boolean,
        required: true,
        default: false
    },
    html: {
        type: Boolean,
        required: true,
        default: false
    },
    css: {
        type: Boolean,
        required: true,
        default: false
    },
    node: {
        type: Boolean,
        required: true,
        default: false
    },
    express: {
        type: Boolean,
        required: true,
        default: false
    },
    mongo: {
        type: Boolean,
        required: true,
        default: false
    },
    mongoose: {
        type: Boolean,
        required: true,
        default: false
    },
    ejs: {
        type: Boolean,
        required: true,
        default: false
    },
    python: {
        type: Boolean,
        required: true,
        default: false
    },
    passport: {
        type: Boolean,
        required: true,
        default: false
    },
    redis: {
        type: Boolean,
        required: true,
        default: false
    },
    kue: {
        type: Boolean,
    },
    nginx: {
        type: Boolean,
        required: true,
        default: false
    },
    websocket : {
        type: Boolean,
        required: true,
        default: false
    },

}, { timestamps: true });


const TechStack = mongoose.model('TechStack', techStackSchema);
module.exports = TechStack;