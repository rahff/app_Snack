const express = require('express');
const router = express.Router();
const contactController = require('../../controllers/app1/contact.controllers')


router.post('', contactController.postMessage)





module.exports = router;