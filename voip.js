const express = require("express");
const apn = require("apn");
const path = require("path");

const app = express();
app.use(express.json());

// Create APNs provider
const apnProvider = new apn.Provider({
  cert: path.join(__dirname, "certs", "cert.pem"), // Full path to your cert
  key: path.join(__dirname, "certs", "key.pem"), // Full path to your key
  production: false, // Set to true if using production cert
});

// VoIP push sender function
async function sendVoipPush(voipToken) {
  const notification = new apn.Notification();

  notification.payload = { message: "Incoming call" };
  notification.topic = "com.phoneado.zimbleDev.voip";
  notification.pushType = "voip";

  try {
    const result = await apnProvider.send(
      notification,
      "4a467a1f87c0623f2302ec66fa7eb784dabdec12abec92459c933dc3baaac75e"
    );
    console.log("Push Result:", result);
    return result;
  } catch (error) {
    console.error("APNs Error:", error);
    throw error;
  }
}

// Express endpoint to trigger VoIP push
app.post("/send-voip", async (req, res) => {
  const { token } = req.body;

  // if (!token) {
  //   return res.status(400).json({ error: "Missing token" });
  // }

  try {
    const result = await sendVoipPush(token);
    res.json({
      sent: result.sent.length,
      failed: result.failed,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to send push", details: error.message });
  }
});

// Start server
app.listen(3000, () => {
  console.log("VoIP Push Server running on http://localhost:3000");
});
