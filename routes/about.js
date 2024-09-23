const express = require('express');
// const path = require('path');

const router = express.Router();

router.get('/about', async (req, res) => {
    res.render('about', {pageTitle: 'About us'});
});

module.exports = router;
