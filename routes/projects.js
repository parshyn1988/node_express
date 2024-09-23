const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/projects', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/projects.html'));
});

module.exports = router;
