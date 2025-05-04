const express = require('express');
const router = express.Router();
const { createCategory, getCategoriesByAddel ,getAllCategories} = require('../controllers/categoryController');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.post('/', upload.single('image'), createCategory);
router.get('/', getAllCategories);
router.get('/addel/:addelId', getCategoriesByAddel);

module.exports = router;
