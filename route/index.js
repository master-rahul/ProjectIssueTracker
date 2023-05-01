const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.use('/project', require('./project'));
router.use('/issue', require('./issue'));
router.get('/', homeController.home);

module.exports = router;