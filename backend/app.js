const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/mywebsite', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
