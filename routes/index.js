const express = require('express');
const router = express.Router();

router.use((req, res, next) => {            // ask about this during study hours
    res.locals.currentUser = req.user;
    next();
});

router.use('/', require('./application.js')); // ask about .js on this line only
router.use('/user', require('./user'));
router.use('/hazards', require('./hazards'));
router.use('/comments', require('./comments'));

router.all('*', (req, res) => {
    res.status(400).send();
});

module.exports = router;