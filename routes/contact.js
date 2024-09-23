const express = require('express');
// const path = require('path');

const router = express.Router();

router.get('/contact', async (req, res) => {
    res.render('contact', {pageTitle: 'Contact us'});
});

module.exports = router;
