const express = require('express');
const router = express.Router();
const { createItem, getItemsByCategory, getPopularItems } = require('../controllers/itemController');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.post('/', upload.single('image'),createItem);
router.get('/category/:categoryId', getItemsByCategory);
router.get('/popular', getPopularItems);

module.exports = router;
