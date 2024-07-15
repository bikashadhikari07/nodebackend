// app.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware to parse JSON
app.use(express.json());

const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose
  .connect(dbUrl, {})
  .then(() => console.log("Database connected!"))
  .catch((err) => console.error("Database connection error:", err));

// Import routes
const userRoutes = require("./routes/userRoute");

// Use routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
