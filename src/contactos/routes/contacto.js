const express = require('express');
const router = express.Router();
const controller = require('../controllers/contacto')

router.get('/', controller.getMessages);
router.post('/', controller.createNewMessage);

module.exports = router;