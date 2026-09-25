const { GoogleGenerativeAI } = require('@google/generative-ai');

exports.generateRecommendation = async ({ city, temperature, humidity, condition }) => {
  const apiKey = process.env.GEMINI_API_KEY;

  if (apiKey && apiKey !== 'YOUR_GEMINI_API_KEY') {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-3.6-flash' });
      const prompt = `Give a short 1-sentence weather recommendation for ${city || 'the area'} (${temperature}°C, ${humidity}% humidity, ${condition}). Explicitly address both temperature and humidity in your suggestion.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim();
    } catch (error) {
      console.warn('⚠️ Gemini API error. Using rule-based fallback:', error.message);
    }
  }

  // Rule-based fallback if API key is invalid or fails
  if (temperature > 30) {
    return "It's hot outside! Wear light cotton clothing and stay hydrated.";
  } else if (temperature < 15) {
    return "It's chilly! Wear a cozy jacket or sweater before heading out.";
  } else {
    return "Great weather! Perfect for a casual walk in comfortable clothes.";
  }
};