const express = require('express');
const router = express.Router();
const issueController = require('../controller/issue');     // fetching the issueController for routing the request to the action

router.post('/add/:id', issueController.add);                // redirecting the request to Controller for adding issue
router.post('/filter/:id', issueController.filter);              // redirecting the request to Controller for filtering issue
router.get('/delete/:issueId/:projectId', issueController.delete);           // redirecting the request to Controller for deleting issue
router.post('/comment/:id', issueController.comment);                        // redirecting the request to Controller for commenting issue



module.exports = router;                 // exporting the router