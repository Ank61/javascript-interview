const amqp = require('amqplib');

async function sendMessage() {
    const queue = 'testQueue';
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    channel.sendToQueue(queue, Buffer.from('Hello from RabbitMQ!'));
    console.log(`[x] Sent message to ${queue}`);
    setTimeout(() => {
        connection.close();
    }, 500);
}

sendMessage().catch(console.error);
