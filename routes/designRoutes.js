// routes/designRoutes.js
const express = require('express');
const router = express.Router();
const designController = require('../controllers/designController');

router.get('/designs', designController.getDesigns);

module.exports = router;
