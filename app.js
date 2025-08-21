console.log("App!");
const express = require("express");
require("dotenv").config();
// const config = require("config");
const mongoose = require("mongoose");
const cors = require("cors"); // CORS middleware for handling cross-origin requests
const path = require("path");
const app = express();

// ✅ Middleware ДО роутов
app.use(express.json({ extended: true })); // Парсит JSON
app.use(cors());

// ✅ Роуты ПОСЛЕ middleware
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));
app.use("/t", require("./routes/redirect.routes"));

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static(path.join(__dirname, "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}... `)
    );
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

start();
