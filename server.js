const addelRoutes = require('./routes/addelRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const itemRoutes = require('./routes/itemRoutes');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/addels', addelRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/items', itemRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ متصل بقاعدة البيانات"))
  .catch(err => console.log("❌ خطأ:", err));

// ربط الراوترات هنا (سنضيفها لاحقًا)

app.listen(PORT, () => {
  console.log(`🚀 السيرفر يعمل على http://localhost:${PORT}`);
});
