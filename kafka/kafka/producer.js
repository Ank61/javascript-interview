const kafka = require("./kafkaClient");
const producer = kafka.producer();

async function sendMessage(value) {
  await producer.connect();
  try {
    await producer.send({
      topic: process.env.KAFKA_TOPIC,
      messages: [{ value }],
    });
    console.log("✅ Message sent:", value);
  } catch (err) {
    console.error("❌ Producer error:", err);
  } finally {
    await producer.disconnect();
  }
}

module.exports = sendMessage;
