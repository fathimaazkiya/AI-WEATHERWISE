# AI-WEATHERWISE
demo video link: https://drive.google.com/file/d/19CKy8Rvsw7QsSdBjXtrL50VtYR67lBBL/view?usp=drive_link

# About the Project:
AI WeatherWise is an intelligent RESTful backend API designed to translate raw meteorological data into immediately actionable daily insights. Developed as a solution to data interpretation fatigue from traditional weather apps, this project bridges the gap between raw numbers and decision-making.Traditional apps provide metrics like $28^\circ\text{C}$ with $85\%$ humidity passively. AI WeatherWise goes further. It utilizes the power of Google Gemini (gemini-3.6-flash) to analyze real-time conditions (temperature, humidity, condition) and generates concise, dynamic recommendations, such as suggesting appropriate clothing or suitable activities.The platform is designed for resilience. It features a robust Deterministic Fallback Engine that maintains service via rule-based logic if external AI APIs encounter issues. AI WeatherWise prioritizes user security and personalization, utilizing JWT authentication to allow users to securely manage personalized favorite locations in MongoDB.

## Local Setup in Smaller Lines
1. Install Node.js & VS Code: Required LTS versions.
2. Install Extensions: Thunder Client, ESLint, DotENV.
3. MongoDB: Get connection Atlas string.
4. Keys: Obtain keys for Gemini and Weather APIs.

## Core Features in Smaller Lines
1. AI Insights: Raw data to dynamic, natural language advice.
2. JWT Auth: Secure, stateless login with hashed passwords.
3. User Favorites: Create, Read, Update, Delete favorite cities.
4. Fallback Logic: Reliable rule-based output if AI service fails.
5. Public Access: Weather endpoint works without an account.

## To Run the Code Successfully
1. Clone Repo: Standard git clone.
2. Install Deps: Run npm install (including axios).
3. Hot-Reload: Install nodemon as dev dependency.
4. Configure .env: Add MONGO_URI, JWT_SECRET, and all API keys.
5. Start Server: Execute npm start.
6. API Flow: Register user, save city, fetch metrics, request insight.
