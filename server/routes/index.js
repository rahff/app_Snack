const express = require('express');
const router = express.Router();
const api_1 = require('./app1/index');
const path = require('path');

router.use('/app1',api_1);

module.exports = router;