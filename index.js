const express = require("express");
const { canClickAd } = require("./sdConcept/rateLimit/tokenBucket");

const app = express();

app.post("/ad-click", (req, res) => {
  const userId = "2"; // or from auth

  if (!userId) return res.status(400).json({ error: "Missing userId" });

  if (canClickAd(userId)) {
    // Proceed with click logic (store in DB, etc.)
    return res.json({ success: true, message: "Click registered" });
  } else {
    return res
      .status(429)
      .json({ success: false, message: "Rate limit: try after 10 minutes" });
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
