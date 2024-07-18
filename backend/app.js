const dotenv = require('dotenv');
const router = require('./routes');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
dotenv.config();

const port = process.env.PORT;

mongoose.connect('mongodb://localhost:27017/WeatherApp', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;

app.get('/items', (req, res) => {
    res.json({ message: 'Get all items' });
  })


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


app.use(express.json());

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

