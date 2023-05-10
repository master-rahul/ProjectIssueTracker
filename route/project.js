const express = require("express");
const router = express.Router();
const projectController = require('../controller/project');

router.post('/add', projectController.add);
router.post('/edit', projectController.edit);
router.post('/update', projectController.update);
router.post('/assign', projectController.assign);
router.post('/close/:id', projectController.close);
router.get('/open/:id', projectController.open);
router.post('/pending/:id', projectController.pending);
router.get('/backlog', projectController.backlog);
router.get('/delete/:id', projectController.delete);

module.exports = router;