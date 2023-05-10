const express = require('express');
const router = express.Router();
const issueController = require('../controller/issue');

router.post('/add/:id', issueController.add);
router.post('/edit/:id', issueController.edit);
router.get('/delete/:issueId/:projectId', issueController.delete);
router.post('/comment/:id', issueController.comment);
router.post('/status/:id', issueController.status);
router.post('/open/:id', issueController.open);
router.post('/close/:id', issueController.close);


module.exports = router;