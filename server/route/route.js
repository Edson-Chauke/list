const express = require("express")
const router = express.Router()
const { login} = require("../controller/loginController");
const { register } = require("../controller/userController");

router.route("/login").post(login);
// router.route("/update").put(update);
router.route("/register").post(register);
module.exports = router

// Routes
app.get('/', (req, res) => {
    res.send('Home Page');
  });
  
  app.get('../login', (req, res) => {
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

  // Routes register
app.get('/', (req, res) => {
    res.send('Home Page');
  });
  
  app.get('/register', (req, res) => {
    res.send('Register Page');
  });
  
  app.post('/register', validateRegistration, (req, res) => {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
    const { username, password } = req.body;
})