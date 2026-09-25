const express = require('express');
const { addLocation, getLocations } = require('../controllers/locationController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, addLocation);
router.get('/', protect, getLocations);

module.exports = router;