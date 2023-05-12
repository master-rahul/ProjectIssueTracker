const mongoose = require('mongoose');               // to  mongoose module
mongoose.connect("mongodb://127.0.0.1:27017/IssueTracker");             // mongodb url
const db = mongoose.connection;             // storing th e connection instance
db.on('error', console.error.bind(console, "Error in Connecting Database"));
db.once('open', () => {console.log("Successfully Connected to Database")});
module.exports = db;            // exporting the database instance