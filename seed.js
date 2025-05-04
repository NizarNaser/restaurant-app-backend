const mongoose = require('mongoose');
require('dotenv').config();

const Addel = require('./models/Addel');
const Category = require('./models/Category');
const Item = require('./models/Item');

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ متصل بقاعدة البيانات");

    // 1. حذف البيانات القديمة
    await Item.deleteMany();
    await Category.deleteMany();
    await Addel.deleteMany();

    // 2. إنشاء الأقسام
    const bar = await Addel.create({ name: 'Bar', description: 'مشروبات وأصناف البار' });
    const kitchen = await Addel.create({ name: 'Küche', description: 'أصناف المطبخ الرئيسية' });

    // 3. إنشاء الفئات
    const categories = await Category.insertMany([
      { name: 'مشروبات ساخنة', image: 'https://i.imgur.com/pHb6Jkz.jpg',addel: bar._id },
      { name: 'مشروبات باردة',image: 'https://i.imgur.com/vXYnyOe.jpg', addel: bar._id },
      { name: 'مقبلات', image: 'https://i.imgur.com/Dr6R3vY.jpg',addel: kitchen._id },
      { name: 'أطباق رئيسية', image: 'https://i.imgur.com/FvWy3v6.jpg',  addel: kitchen._id },
    ]);

    // 4. إنشاء العناصر
    await Item.insertMany([
      {
        name: 'كابتشينو',
        description: 'قهوة إيطالية ساخنة',
        price: 3.5,
        isPopular: true,
        image: 'https://i.imgur.com/1zQZ1Zm.jpg',
        category: categories[0]._id,
      },
      {
        name: 'عصير برتقال',
        description: 'عصير طبيعي طازج',
        price: 2.5,
        isPopular: false,
        image: 'https://i.imgur.com/LcA6bYH.jpg',
        category: categories[1]._id,
      },
      {
        name: 'حمص',
        description: 'مقبلات شرقية',
        price: 4,
        isPopular: true,
        image: 'https://i.imgur.com/HMvRJbt.jpg',
        category: categories[2]._id,
      },
      {
        name: 'شاورما دجاج',
        description: 'طبق شرقي شهي',
        price: 8,
        isPopular: true,
        image: 'https://i.imgur.com/s6uEkTP.jpg',
        category: categories[3]._id,
      }
    ]);

    console.log("✅ تمت إضافة البيانات التجريبية بنجاح");
    process.exit();
  })
  .catch(err => console.error("❌ فشل الاتصال:", err));
