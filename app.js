console.log("App!");
const express = require("express");
const config = require("config");
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
// const PORT = config.get("port") || 4000;
// const PORT = require("dotenv").config();

async function start() {
  try {
    console.log("Attempting to connect to MongoDB...");
    await mongoose.connect(config.get("mongoUri"));
    console.log("MongoDB connected successfully!");

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}... `)
    );
  } catch (e) {
    console.log("Server error", e.message);
    process.exit(1);
  }
}

// //test
// const ItemSchema = new mongoose.Schema({ name: String });
// const Item = mongoose.model("Item", ItemSchema);

// app.get("/items", async (req, res) => {
//   try {
//     const items = await Item.find(); // Найти все
//     res.json(items);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error fetching items");
//   }
// });
// //

start();
