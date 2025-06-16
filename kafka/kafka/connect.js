const { Kafka, logLevel } = require("kafkajs");
require("dotenv").config();

const kafka = new Kafka({
  clientId: "kafka-poc-client",
  brokers: [process.env.KAFKA_BROKER],
  logLevel: logLevel.INFO,
});

module.exports = kafka;
