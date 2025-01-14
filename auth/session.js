const express = require('express');
const session = require('express-session');
const Redis = require('ioredis');
const {RedisStore} = require('connect-redis');

const app = express();

// Create a Redis client
const redisClient = new Redis();

// Middleware for parsing JSON and form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware using Redis store
app.use(
  session({
    store: new RedisStore({ client: redisClient }),
    secret: 'secret-key', // Use a more secure key in production
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }, // Session timeout of 60 seconds
  })
);

// Root route
app.get('/', (req, res) => {
  const sessionData = req.session;
  console.log(sessionData);
  res.send({ message: 'Session data', session: sessionData });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple authentication logic
  if (username === 'test' && password === 'password') {
    console.log(req.session)
    req.session.isLoggedIn = true;
    req.session.username = username;

    res.status(200).send({ message: 'Login successful', redirect: '/dashboard' });
  } else {
    res.status(401).send({ message: 'Invalid credentials', redirect: '/login' });
  }
});

// Logout route
app.get('/logout', (req, res) => {
  console.log("Check",req.session)
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Logout failed' });
    } else {
      res.send({ message: 'Logged out successfully' });
    }
  });
});

// Dashboard route
app.get('/dashboard', (req, res) => {
    console.log(req.session)
  const { isLoggedIn, username } = req.session;

  if (isLoggedIn) {
    res.send({ message: `Welcome to your dashboard, ${username}` });
  } else {
    res.status(403).send({ message: 'Unauthorized access', redirect: '/login' });
  }
});

// View all active sessions (from Redis)
app.get('/sessions', (req, res) => {
  redisClient.keys('sess:*', (err, keys) => {
    if (err) {
      return res.status(500).send({ message: 'Error retrieving sessions', error: err });
    }
    res.send({ message: 'Active sessions', sessions: keys });
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
