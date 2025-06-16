const adClickTokens = {};
const MAX_TOKENS = 1;
const REFILL_INTERVAL_MS = 10 * 60 * 500;

function canClickAd(userId) {
  const now = Date.now();
  if (!adClickTokens[userId]) {
    adClickTokens[userId] = {
      tokens: MAX_TOKENS,
      lastRefill: now,
    };
  }

  const bucket = adClickTokens[userId];
  const elapsed = now - bucket.lastRefill;
  if (elapsed >= REFILL_INTERVAL_MS) {
    bucket.tokens = MAX_TOKENS;
    bucket.lastRefill = now;
  }
  if (bucket.tokens > 0) {
    bucket.tokens -= 1;
    return true;
  }

  return false;
}

module.exports = { canClickAd };
