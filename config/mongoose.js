const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/IssueTracker");
const db = mongoose.connection;
db.on('error', console.error.bind(console, "Error in Connecting Database"));
db.once('open', () => {console.log("Successfully Connected to Database")});
module.exports = db;