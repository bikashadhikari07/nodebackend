// scripts/addParticipants.js
require("dotenv").config();
const mongoose = require("mongoose");
const Participant = require("./models/Participant");
const dbUrl = process.env.DATABASE_URL;
// List of participants to add in bulk
const participants = [
  {
    name: "Hacker_Adish Dahal",
    foodSlots: [
      { mealType: "breakfast", day: "day 1", slotAvailable: true },
      { mealType: "lunch", day: "day 1", slotAvailable: true },
      { mealType: "snacks", day: "day 1", slotAvailable: true },
      { mealType: "dinner", day: "day 1", slotAvailable: true },
      { mealType: "breakfast", day: "day 2", slotAvailable: true },
      { mealType: "lunch", day: "day 2", slotAvailable: true },
      { mealType: "snacks", day: "day 2", slotAvailable: true },
      { mealType: "dinner", day: "day 2", slotAvailable: true },
      { mealType: "breakfast", day: "day 3", slotAvailable: true },
      { mealType: "lunch", day: "day 3", slotAvailable: true },
      { mealType: "snacks", day: "day 3", slotAvailable: true },
      { mealType: "dinner", day: "day 3", slotAvailable: true },
    ],
  },
  {
    name: "Hacker_Bikash Adhikari",
    foodSlots: [
      { mealType: "breakfast", day: "day 1", slotAvailable: true },
      { mealType: "lunch", day: "day 1", slotAvailable: true },
      { mealType: "snacks", day: "day 1", slotAvailable: true },
      { mealType: "dinner", day: "day 1", slotAvailable: true },
      { mealType: "breakfast", day: "day 2", slotAvailable: true },
      { mealType: "lunch", day: "day 2", slotAvailable: true },
      { mealType: "snacks", day: "day 2", slotAvailable: true },
      { mealType: "dinner", day: "day 2", slotAvailable: true },
      { mealType: "breakfast", day: "day 3", slotAvailable: true },
      { mealType: "lunch", day: "day 3", slotAvailable: true },
      { mealType: "snacks", day: "day 3", slotAvailable: true },
      { mealType: "dinner", day: "day 3", slotAvailable: true },
    ],
  },
  // Add more participants as necessary
];

async function addParticipants() {
  try {
    // Connect to MongoDB
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Insert participants in bulk
    const result = await Participant.insertMany(participants);

    console.log(`Successfully added ${result.length} participants.`);
  } catch (err) {
    console.error("Error adding participants:", err);
  } finally {
    // Close the connection
    mongoose.disconnect();
  }
}

addParticipants();
