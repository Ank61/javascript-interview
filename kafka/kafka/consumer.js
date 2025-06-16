const kafka = require("./kafkaClient");
const consumer = kafka.consumer({ groupId: "kafka-poc-group" });

async function startConsumer() {
  await consumer.connect();
  await consumer.subscribe({
    topic: process.env.KAFKA_TOPIC,
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        console.log(`📥 Received: ${message.value.toString()}`);
        // TODO: Add real processing logic here
      } catch (err) {
        console.error("❌ Error processing message:", err);
      }
    },
  });

  // Graceful shutdown
  process.on("SIGINT", async () => {
    console.log("\n🛑 Disconnecting consumer...");
    await consumer.disconnect();
    process.exit();
  });
}

module.exports = startConsumer;
