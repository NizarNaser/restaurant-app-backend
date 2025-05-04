const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  isPopular: Boolean,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  image: String, // ✅ أضف هذا السطر
});

module.exports = mongoose.model('Item', ItemSchema);

