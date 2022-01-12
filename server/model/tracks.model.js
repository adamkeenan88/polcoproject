const mongoose = require("mongoose");
const TrackSchema = new mongoose.Schema(
  {
    rank: { type: String },
    artist: { type: String },
    title: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Track", TrackSchema);
