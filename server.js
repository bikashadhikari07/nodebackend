// app.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

// Middleware to parse JSON
app.use(express.json());
app.use(
  cors({
    origin: "*", // Or specify the frontend URL
  })
);

const port = process.env.PORT || 3200;
const dbUrl = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose
  .connect(dbUrl, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));

// Import routes
const userRoutes = require("./routes/userRoute");
const foodSlotRoutes = require("./routes/foodSlotRoutes");

// Use routes
app.use("/api/users", userRoutes);
app.use("/api/food-slot", foodSlotRoutes);

app.get("/", (req, res) => {
  res.send("Happy Hacking>>>>");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
