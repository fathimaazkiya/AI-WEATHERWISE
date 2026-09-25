const aiService = require('../services/aiService');

exports.getRecommendation = async (req, res) => {
  try {
    const { city, temperature, humidity, condition } = req.body;
    const recommendation = await aiService.generateRecommendation({ city, temperature, humidity, condition });
    res.status(200).json({ success: true, recommendation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};