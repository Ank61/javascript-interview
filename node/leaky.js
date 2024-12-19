class LeakyBucket {
    constructor(bucketCapacity, leakRate) {
      this.bucketCapacity = bucketCapacity; // Maximum requests bucket can hold
      this.leakRate = leakRate; // Requests allowed per second
      this.tokens = 0; // Current level of the bucket (used tokens)
      this.lastUpdate = Date.now(); // Last time the bucket was updated
    }
  
    refillTokens() {
      const now = Date.now();
      const elapsedTime = (now - this.lastUpdate) / 1000; // Convert to seconds
      const leakedTokens = elapsedTime * this.leakRate;
  
      // Reduce tokens based on leak rate, ensuring it doesn't drop below 0
      this.tokens = Math.max(0, this.tokens - leakedTokens);
      this.lastUpdate = now;
    }
  
    allowRequest() {
      this.refillTokens(); // Leak tokens based on time elapsed
      if (this.tokens < this.bucketCapacity) {
        this.tokens += 1; // Add a request to the bucket
        return true; // Allow the request
      }
      return false; // Deny the request (bucket overflow)
    }
  }
  
  // Example usage with Express
  const express = require('express');
  const app = express();
  
  const bucket = new LeakyBucket(10, 5); // Bucket can hold 10 requests, allows 5 requests/sec
  
  app.get('/api', (req, res) => {
    if (bucket.allowRequest()) {
      res.send('Request allowed!');
    } else {
      res.status(429).send('Too many requests. Please try again later.');
    }
  });
  
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  