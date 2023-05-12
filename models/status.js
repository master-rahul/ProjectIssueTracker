const mongoose = require('mongoose'); // to fetch mongoose module

// This schema is used to store the status of the issue like its pending/ completed.
const statusSchema = new mongoose.Schema({
    open : {
        type : Boolean,
        required : true,
        default : false
    },
    pending : {
        type : Boolean,
        required: true,
        default: false
    },
    close: {
        type: Boolean,
        required: true,
        default: false
    },
    hold: {
        type: Boolean,
        required: true,
        default: false
    }
}, {timestamps : true});

const Status = mongoose.model('Status', statusSchema);
module.exports = Status;          // Exporting the Schema for global access.