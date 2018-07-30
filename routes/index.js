const express = require('express');
const router = express.Router();

router.use('/', require('./application.js')); // ask about .js on this line only
router.use('/user', require('./user'));
router.use('/hazards', require('./hazards'));

router.all('*', (req, res) => {             
    res.status(400).send();
});

module.exports = router;