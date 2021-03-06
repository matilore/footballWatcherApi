const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const teamSchema = new Schema({
  name: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Team = mongoose.model("Team", teamSchema);

module.exports = Team;
