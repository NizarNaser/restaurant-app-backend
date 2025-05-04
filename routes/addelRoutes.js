const express = require('express');
const router = express.Router();
const { createAddel, getAllAddels } = require('../controllers/addelController');

router.post('/', createAddel);
router.get('/', getAllAddels);

module.exports = router;
