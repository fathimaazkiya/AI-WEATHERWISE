const axios = require('axios');

exports.fetchWeatherData = async (city) => {
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (apiKey && apiKey !== 'YOUR_OPENWEATHER_API_KEY') {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;
      const response = await axios.get(url);
      const data = response.data;

      return {
        city: data.name,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        condition: data.weather[0].main,
        isMock: false
      };
    } catch (error) {
      console.warn('⚠️ OpenWeather API request failed. Using mock fallback data.');
    }
  }

  // Fallback mock weather data generator
  return {
    city: city.charAt(0).toUpperCase() + city.slice(1),
    temperature: 28,
    humidity: 70,
    windSpeed: 12,
    condition: "Sunny",
    isMock: true
  };
};