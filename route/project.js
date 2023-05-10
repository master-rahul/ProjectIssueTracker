const express = require("express");
const router = express.Router();
const projectController = require('../controller/project');

router.post('/add', projectController.add);
router.get('/open/:id', projectController.open);

module.exports = router;