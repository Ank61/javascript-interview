const { fork } = require("child_process");
const computeProcess = fork("./child.js");
computeProcess.send("Hello from parent")
computeProcess.on('message', (data) =>
    console.log("Parent", data)
)