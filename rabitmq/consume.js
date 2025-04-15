const amqp = require('amqplib');

async function receiveMessage() {
    const queue = 'testQueue';
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue);
    console.log(`[x] Waiting for messages in ${queue}`);

    channel.consume(queue, (msg) => {
        if (msg !== null) {
            console.log(`[✔] Received: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
}

receiveMessage().catch(console.error);