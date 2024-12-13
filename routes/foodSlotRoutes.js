const express = require("express");
const {
  getSlots,
  getSlotStatusByName,
  deductSlot,
} = require("../controller/foodSlotController");
const authenticateUser = require("../middleware/authenticateUser");

const router = express.Router();

// Get all food slots
router.get("/slots", authenticateUser, getSlots);

// Get food slot status for a specific participant by name
router.get("/slots/:participantName", authenticateUser, getSlotStatusByName);

// Deduct a food slot (for breakfast, lunch, snacks, dinner)
router.post("/deduct-slot", authenticateUser, deductSlot);

module.exports = router;
