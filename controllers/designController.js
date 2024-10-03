const express = require('express');
const router = express.Router();
const designs = require('../public/models/designs.json');

router.get('/', (req, res) => {
    res.render('designs/index', { 
        title: '3D Designs', 
        designs 
    });
});

module.exports = router;