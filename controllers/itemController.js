const Item = require('../models/Item');

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const { name, description, price, isPopular, category } = req.body;
    const image = req.file?.path;

    if (!name || !price || !category || !image) {
      return res.status(400).json({ error: 'Incomplete data' });
    }

    const newItem = await Item.create({
      name,
      description,
      price: parseFloat(price),
      isPopular: isPopular === 'true',
      category,
      image,
    });

    res.status(201).json(newItem);
  } catch (err) {
    console.error('Error while saving item:', err.message);
    res.status(500).json({ error: err.message });
  }
};

// Get all items for a specific category
exports.getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get popular items
exports.getPopularItems = async (req, res) => {
  try {
    const items = await Item.find({ isPopular: true }).limit(10);
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
