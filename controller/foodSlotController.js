const Participant = require("../models/Participant");

// Get food slot status for all participants
const getSlots = async (req, res) => {
  try {
    // Get all participants and their food slots
    const participants = await Participant.find({});
    res.status(200).json(participants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get food slot status for a specific participant by name
const getSlotStatusByName = async (req, res) => {
  try {
    const { participantName } = req.params;

    // Find the participant by their name
    const participant = await Participant.findOne({ name: participantName });

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    // Return the participant's food slots
    res.status(200).json(participant.foodSlots);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Deduct food slot for a participant using their name
const deductSlot = async (req, res) => {
  try {
    const { participantName, mealType, day } = req.body;

    // Find the participant by their name, not by ID
    const participant = await Participant.findOne({ name: participantName });

    if (!participant) {
      return res.status(404).json({ message: "Participant not found" });
    }

    // Find the specific meal slot for the given day and mealType
    const foodSlot = participant.foodSlots.find(
      (slot) => slot.mealType === mealType && slot.day === day
    );

    if (!foodSlot) {
      return res
        .status(400)
        .json({ message: "Food slot not found for this participant" });
    }

    // Check if the slot is available
    if (!foodSlot.slotAvailable) {
      return res.status(400).json({ message: "Food slot already deducted" });
    }

    // Deduct the food slot (set slotAvailable to false)
    foodSlot.slotAvailable = false;
    await participant.save();

    res.status(200).json({ message: "Food slot successfully deducted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getSlots, getSlotStatusByName, deductSlot };
