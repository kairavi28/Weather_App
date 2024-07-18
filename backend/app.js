const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const weatherRoutes = require('./weatherRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors({
  origin: process.env.frontendURL //as frontend runs on port 3000
}));

mongoose.connect(process.env.mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/api', weatherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
