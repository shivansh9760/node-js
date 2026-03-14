const express = require("express");
const mongoose = require("mongoose");
const redis = require("redis");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8090;

/* MongoDB Connection */

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* Redis Connection */

const redisClient = redis.createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

redisClient.connect();

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

/* Routes */

app.get("/", (req, res) => {
  res.send("Node DevOps Application Running 🚀");
});

app.get("/health", async (req, res) => {
  res.json({
    status: "UP",
    mongodb: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    redis: redisClient.isOpen ? "connected" : "disconnected"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});