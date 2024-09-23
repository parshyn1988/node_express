const express = require('express');
// const path = require('path');

const router = express.Router();

router.get('/projects', async (req, res) => {
    res.render('projects', {pageTitle: 'Our Projects'});
});

module.exports = router;
