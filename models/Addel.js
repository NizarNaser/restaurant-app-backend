const mongoose = require('mongoose');

const addelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    enum: ['Bar', 'Küche'], // البار أو المطبخ
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Addel', addelSchema);
