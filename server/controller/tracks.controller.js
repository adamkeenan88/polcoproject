const Track = require("../model/tracks.model");
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World",
  });
};

module.exports.createTrack = (request, response) => {
  const { rank, artist, title } = request.body;
  Track.create(request.body)
    .then((track) => response.json(track))
    .catch((err) => response.json(err));
};

module.exports.findTrack = (req, res) => {
  Track.find()
    .then((allTracks) => res.json({ track: allTracks }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteTrack = (req, res) => {
  Track.deleteOne({ _id: req.params.trackId })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};
