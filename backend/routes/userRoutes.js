const express = require('express');
const router = express.Router();
const User = require('../models/User');
const emailQueue = require('../queue'); // Import your email queue utility

// Register a new user
router.post('/register', async (req, res) => {
  const { email, name, password } = req.body;

  // Input validation
  if (!email || !name || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered.' });
    }

    // Create a new user
    const newUser = new User({ email, name, password });
    await newUser.save();

    // Add email job to the queue
    await emailQueue.add('sendEmail', { email, name });

    res.status(201).json({ message: 'Registration successful! Email will be sent shortly.' });
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).json({ message: 'Registration failed. Please try again later.' });
  }
});

module.exports = router;
