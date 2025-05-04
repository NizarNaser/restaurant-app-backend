const Addel = require('../models/Addel');

exports.createAddel = async (req, res) => {
  try {
    const newAddel = await Addel.create(req.body);
    res.status(201).json(newAddel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllAddels = async (req, res) => {
  try {
    const addels = await Addel.find();
    res.json(addels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
