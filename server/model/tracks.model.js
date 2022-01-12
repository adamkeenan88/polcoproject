const mongoose = require("mongoose");
const TrackSchema = new mongoose.Schema(
  {
    artist: { type: String },
    createdAt: { type: String },
    rank: { type: String },
    title: { type: String },
    updatedAt: { type: String },
    _v: { type: Number },
    _id: { type: String },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Track", TrackSchema);
