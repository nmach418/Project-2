const express = require('express');
const router = express.Router();
const showController = require('../controllers/show.js')

router.get('/', showController.showgo);

module.exports = router;  // delete show.js file