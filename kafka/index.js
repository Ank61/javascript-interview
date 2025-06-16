require("dotenv").config();
const sendMessage = require("./kafka/producer");
const startConsumer = require("./kafka/consumer");
const kafka = require("./kafka/kafkaClient");

async function ensureTopicExists() {
  const admin = kafka.admin();
  await admin.connect();
  const topics = await admin.listTopics();
  if (!topics.includes(process.env.KAFKA_TOPIC)) {
    await admin.createTopics({
      topics: [
        {
          topic: process.env.KAFKA_TOPIC,
          numPartitions: 1,
          replicationFactor: 1,
        },
      ],
    });
    console.log(`✅ Created topic: ${process.env.KAFKA_TOPIC}`);
  } else {
    console.log(`✔️ Topic exists: ${process.env.KAFKA_TOPIC}`);
  }
  await admin.disconnect();
}

(async () => {
  await ensureTopicExists();
  startConsumer();

  // Send a test message every 5 seconds
  setInterval(() => {
    sendMessage(`Hello Kafka! ${new Date().toISOString()}`);
  }, 5000);
})();
