const mongoose = require("mongoose")

const AlertSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
    trim: true,
  },
  severity: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  details: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("Alert", AlertSchema)