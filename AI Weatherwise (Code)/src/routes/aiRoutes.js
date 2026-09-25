const express = require('express');
const { getRecommendation } = require('../controllers/aiController');
const router = express.Router();

router.post('/weather-recommendation', getRecommendation);

module.exports = router;