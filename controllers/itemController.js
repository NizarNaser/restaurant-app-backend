const Item = require('../models/Item');

exports.createItem = async (req, res) => {
    try {
      const { name, description, price, isPopular, category } = req.body;
  
      const newItem = await Item.create({
        name,
        description,
        price,
        isPopular,
        category,
        image: req.file?.path || '', // الصورة من Cloudinary
      });
  
      res.status(201).json(newItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

exports.getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPopularItems = async (req, res) => {
  try {
    const items = await Item.find({ isPopular: true }).limit(10);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
