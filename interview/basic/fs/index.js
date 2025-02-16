// Question: Describe how you would handle file uploads in a Node.js application using multer.
// Provide a sample code snippet for uploading a single file.

// Answer:
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
// const express = require('express');
// const multer = require('multer');
// const path = require('path');

// const app = express();
// const PORT = 3000;

// // Configure multer storage
// const storage = multer.diskStorage({
//     destination: './uploads/',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage });
// // File upload endpoint
// app.post('/upload', upload.single('file'), (req, res) => {
//     try {
//         if (!req.file) {
//             return res.status(400).json({ error: 'No file uploaded' });
//         }
//         res.json({
//             message: 'File uploaded successfully',
//             file: {
//                 name: req.file.filename,
//                 size: req.file.size,
//                 mimetype: req.file.mimetype
//             }
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// // Test endpoint
// app.get('/test', (req, res) => {
//     res.json({ message: 'API is working' });
// });

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/uploadsDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Define a Mongoose schema and model
const fileSchema = new mongoose.Schema({
  name: String,
  size: Number,
  mimetype: String,
  uploadDate: { type: Date, default: Date.now },
});
const File = mongoose.model("File", fileSchema);

// Configure multer storage
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// File upload endpoint
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Save file details to MongoDB
    // const newFile = new File({
    //     name: req.file.filename,
    //     size: req.file.size,
    //     mimetype: req.file.mimetype
    // });
    // await newFile.save();

    await File.updateOne({ name: "ankit" }, { $set: { size: 213 } });

    res.json({
      message: "File uploaded successfully",
      file: newFile,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get uploaded files
app.get("/files", async (req, res) => {
  try {
    const files = await File.find();
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Test endpoint
app.get("/test", (req, res) => {
  res.json({ message: "API is working" });
});

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

app.post("/uploads", async (req, res) => {
  try {
    const fileName = req.headers["file-name"];

    if (!fileName) {
      return res.status(400).json({ error: "File name is required in headers" });
    }

    const filePath = path.join(uploadDir, fileName);
    const writeStream = fs.createWriteStream(filePath);

    req.pipe(writeStream);

    writeStream.on("finish", async () => {
      const newFile = new File({ name: fileName, path: filePath });
      await newFile.save();
      res.json({ message: "File uploaded successfully", file: newFile });
    });

    writeStream.on("error", (err) => {
      res.status(500).json({ error: "File upload failed", details: err.message });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
