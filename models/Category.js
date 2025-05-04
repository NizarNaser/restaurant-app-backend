const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: String,
  addel: { type: mongoose.Schema.Types.ObjectId, ref: 'Addel' },
  image: String, // ✅ أضف هذا السطر
});

module.exports = mongoose.model('Category', CategorySchema);

