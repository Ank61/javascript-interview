//Question: Describe how you would handle file uploads in a Node.js application using multer.
// Provide a sample code snippet for uploading a single file.

//Answer:
// SIMPLE CREATE SERVER WITHOUT EXPRESS
// const { createServer } = require("http");
// const multer = require("multer");
// const PORT = 3000;
// const server = createServer((req, res) => {
//   //Set the response header for JSON response
//   res.setHeader("Content-Type", "application/json");

//   //Handle route
//   if (req.method === "GET" && req.url === "/api/hello") {
//     res.writeHead(200);
//     res.end(JSON.stringify({ message: "Hello world" }));
//   } else {
//     res.writeHead(404);
//     res.end(JSON.stringify({ message: "Page Not found " }));
//   }
// });
// server.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });

// API WITH EXPRESS
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 3000;

// Configure multer storage
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });
// File upload endpoint
app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        res.json({
            message: 'File uploaded successfully',
            file: {
                name: req.file.filename,
                size: req.file.size,
                mimetype: req.file.mimetype
            }
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Test endpoint
app.get('/test', (req, res) => {
    res.json({ message: 'API is working' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));