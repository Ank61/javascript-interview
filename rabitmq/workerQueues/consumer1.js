#!/usr/bin/env node

var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }
    var queue = "task_queue";
    channel.assertQueue(queue, {
      durable: true,
    });
    channel.prefetch(1); // Fair dispatch

    channel.consume(
      queue,
      function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
        }, 3 * 1000);
      },
      {
        noAck: false,
      }
    );
  });
});
