const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foodSlots: [
    {
      mealType: {
        type: String,
        enum: ["breakfast", "lunch", "snacks", "dinner"],
        required: true,
      },
      day: {
        type: String,
        enum: ["day 1", "day 2", "day 3"],
        required: true,
      },
      slotAvailable: {
        type: Boolean,
        default: true, // true means slot is available
      },
    },
  ],
});

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
