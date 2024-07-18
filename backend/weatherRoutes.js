const express = require('express');
const router = express.Router();
const Weather = require('./model/Weather');

// @desc    Create new weather data
// @route   POST /api/weather
// @access  Public
router.post('/weather', async (req, res) => {
  try {
    const weather = new Weather(req.body);
    await weather.save();
    res.status(201).json({ success: true, data: weather });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
