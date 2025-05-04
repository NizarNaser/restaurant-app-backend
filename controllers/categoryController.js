const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
  try {
    const { name, addel } = req.body;

    const newCategory = await Category.create({
      name,
      addel,
      image: req.file?.path || '', // ✅ رابط الصورة من Cloudinary
    });

    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoriesByAddel = async (req, res) => {
  try {
    const categories = await Category.find({ addel: req.params.addelId });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
