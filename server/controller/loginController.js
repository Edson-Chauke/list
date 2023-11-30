exports.login = async (req, res, next) => {
  const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Sample user data (replace this with a database in a real application)
const users = [
  { id: 1, username: 'user1', password: '$2b$10$ufbkG8fZxFHXDWJSC4G4ROcmLb1JZIiFB53h/yjxK8x7kdDX8Y2sC' }, // hashed 'password1'
];

// Passport configuration
passport.use(
  new LocalStrategy((username, password, done) => {
    const user = users.find((u) => u.username === username);

    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = users.find((u) => u.id === id);
  done(null, user);
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).send('Unauthorized');
};

// Routes
app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/login', (req, res) => {
  res.send('Login Page');
});

app.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
    failureFlash: true,
  })
);

app.get('/dashboard.', isAuthenticated, (req, res) => {
  res.send(`Welcome ${req.user.username} to the Dashboard`);
});

app.get('/logout', (req, res) => {
  req.logout();
  res.send('Logged out successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

}