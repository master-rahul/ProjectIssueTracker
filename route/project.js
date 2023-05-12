const express = require("express");
const router = express.Router();
const projectController = require('../controller/project');               // fetching the issueController for routing the request to the action

router.post('/add', projectController.add);                 // redirecting the request to Controller for adding project
router.get('/open/:id', projectController.open);            // redirecting the request to Controller for opening project
router.post('/open/:id', projectController.filter);         // redirecting the request to Controller for filtering project

module.exports = router;             // exporting the router