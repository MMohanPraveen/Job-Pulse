const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  dateApplied: { type: Date, default: Date.now },
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: {
    type: String,
    enum: ["applied", "interview", "rejected", "offer"],
    default: "applied",
  },
  location: { type: String, required: true },
});

module.exports = mongoose.model("Job", jobSchema);
