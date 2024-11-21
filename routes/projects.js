const express = require('express');

const projectController = require('../controllers/projects');

const router = express.Router();

router.get('/projects', projectController.getProjects);

module.exports = router;
