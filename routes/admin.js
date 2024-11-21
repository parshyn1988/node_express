const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projects');
const aboutController = require('../controllers/about');

router.get('/admin', async (req, res) => {
    res.render('admin', {pageTitle: 'Admin'});
});

router.post('/admin/project', projectController.addProject);

router.post('/admin/employee', aboutController.addEmployee);

module.exports = router;
