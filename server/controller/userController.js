const User = require("../model/User")
// auth.js

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

const app = express();
const port = 3000;

// Sample user data (replace this with a database in a real application)
const users = [];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));

// Validation middleware
const validateRegistration = [
  check('username').isLength({ min: 5 }).withMessage('Username must be at least 5 characters long'),
  check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];

  // Check if the username is already taken
  if (users.some((user) => user.username === username)) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Save the user to the database (in-memory in this example)
  users.push({ username, password: hashedPassword });

  res.json({ message: 'Registration successful', username });


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
