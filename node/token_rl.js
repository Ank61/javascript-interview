class TokenBucket {
  constructor(capacity, fillPerSecond) {
      this.capacity = capacity;        // Maximum tokens the bucket can hold
      this.fillPerSecond = fillPerSecond;  // Rate at which tokens refill
      this.tokens = capacity;          // Current token count
      this.lastFilled = Date.now();    // Last time we refilled tokens
  }

  refill() {
      const now = Date.now();
      const timePassed = (now - this.lastFilled) / 1000; // Convert to seconds
      const fillAmount = timePassed * this.fillPerSecond;
      this.tokens = Math.min(this.capacity, this.tokens + fillAmount);
      this.lastFilled = now;
  }

  tryConsume(tokens = 1) {
    console.log("before refil",this.tokens)
      this.refill();
      console.log("after refil",this.tokens)
      if (this.tokens >= tokens) {
          this.tokens -= tokens;
          return true;
      }
      
      return false;
  }

  getTokens() {
      this.refill();
      return this.tokens;
  }
}

// Example usage with Express middleware
function createRateLimiter(capacity, fillPerSecond) {
  const buckets = new Map();
  
  return function rateLimiterMiddleware(req, res, next) {
      const ip = req.ip;
      
      if (!buckets.has(ip)) {
          buckets.set(ip, new TokenBucket(capacity, fillPerSecond));
          console.dir("Buckets",buckets,{ depth : null})
      }
      
      const bucket = buckets.get(ip);
      console.dir("Buckets",buckets,{ depth : null})
      if (bucket.tryConsume(1)) {
          next();
      } else {
          res.status(429).json({
              error: 'Too Many Requests',
              retryAfter: Math.ceil((1 - bucket.getTokens()) / fillPerSecond)
          });
      }
  };
}

// Example Express server setup
const express = require('express');
const app = express();

// Create a rate limiter that allows 10 requests per second
const rateLimiter = createRateLimiter(10, 1);

// Apply rate limiting to all routes
app.use(rateLimiter);

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});