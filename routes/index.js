const express = require('express');
const router = express.Router();

router.use('/hamster', require('./hamster.routes'));

module.exports = router;
