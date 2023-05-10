const express = require('express');
const router = express.Router();
const homeController = require('../controller/home');

router.use('/project', require('./project'));
router.use('/issue', require('./issue'));
router.get('/', homeController.home);
router.post('/', homeController.home1);

module.exports = router;