const express = require('express');
// const path = require('path');
const router = express.Router();

router.use((req, res) => {
    res.status(404).render('404', {pageTitle: 'Not Found'});
});

module.exports = router;
