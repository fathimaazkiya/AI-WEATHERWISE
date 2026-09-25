const weatherService = require('../services/WeatherService');

exports.getWeather = async (req, res) => {
  try {
    const { city } = req.params;
    const weatherData = await weatherService.fetchWeatherData(city);
    res.status(200).json({ success: true, data: weatherData });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};