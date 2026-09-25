const Location = require('../models/Location');

exports.addLocation = async (req, res) => {
  try {
    const { city, country } = req.body;
    const location = await Location.create({ city, country, user: req.user.id });
    res.status(201).json({ success: true, data: location });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find({ user: req.user.id });
    res.status(200).json({ success: true, data: locations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};