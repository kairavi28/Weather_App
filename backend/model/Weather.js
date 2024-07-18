const mongoose = require('mongoose');

const WeatherSchema = new mongoose.Schema({
  city: String,
  country: String,
  temperatureC: Number,
  temperatureF: Number,
  humidity: Number,
  main: String,
  icon: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Weather', WeatherSchema);