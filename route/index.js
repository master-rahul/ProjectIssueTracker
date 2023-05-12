const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');                               // fetching the homeController for routing the request to the action

router.use('/project', require('./project'));                                       // redirecting the request for projects
router.use('/issue', require('./issue'));                                           // redirecting the request for issues.
router.get('/', homeController.home);                                               // redirect the request for homePage via GET
router.post('/', homeController.home1);                                             // redirect the request for homePage via POST

module.exports = router;                                                            // exporting the router