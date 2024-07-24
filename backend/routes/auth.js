const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = new User({ username, password });
    await user.save();
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !user.comparePassword(password)) {
      return res.status(401).send('Invalid username or password');
    }
    const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
    
