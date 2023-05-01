const express = require('express');
const router = express.Router();
const issueController = require('../controller/issue');

router.post('/add/:id', issueController.add);
router.post('/edit/:id', issueController.edit);
router.post('/update/:id', issueController.update);
router.post('/assign/:id', issueController.assign);
router.post('/status/:id', issueController.status);
router.post('/open/:id', issueController.open);
router.post('/close/:id', issueController.close);
router.post('/pending/:id', issueController.pending);

module.exports = router;