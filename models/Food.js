const mongoose = require("mongoose");

const foodSlotSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Assuming you have a User model
    required: true,
  },
  slots: {
    day1: {
      breakfast: { type: Number, default: 0 },
      lunch: { type: Number, default: 0 },
      snacks: { type: Number, default: 0 },
      dinner: { type: Number, default: 0 },
    },
    day2: {
      breakfast: { type: Number, default: 0 },
      lunch: { type: Number, default: 0 },
      snacks: { type: Number, default: 0 },
      dinner: { type: Number, default: 0 },
    },
    day3: {
      breakfast: { type: Number, default: 0 },
      lunch: { type: Number, default: 0 },
      snacks: { type: Number, default: 0 },
      dinner: { type: Number, default: 0 },
    },
  },
  isSlotUsed: {
    type: Boolean,
    default: false,
  },
});

const FoodSlot = mongoose.model("FoodSlot", foodSlotSchema);

module.exports = FoodSlot;
