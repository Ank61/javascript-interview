const amqp = require("amqplib");

async function sendMessage() {
  var queue = "task_queue";
  const connection = await amqp.connect("amqp://localhost");
  const channel = await connection.createChannel();
  var msg = process.argv.slice(2).join(" ") || "Hello World!";
  channel.assertQueue(queue, {
    durable: true,
  });
  channel.sendToQueue(queue, Buffer.from(msg), {
    persistent: true,
  });
  console.log(" [x] Sent '%s'", msg);
  setTimeout(() => {
    connection.close();
  }, 500);
}

sendMessage().catch(console.error);
