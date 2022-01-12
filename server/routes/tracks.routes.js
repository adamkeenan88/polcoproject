const TracksController = require("../controller/tracks.controller");
module.exports = (app) => {
  app.get("/healthcheck", (req, res) => {
    res.send("Everything ok");
  });
  app.post("/api/track", TracksController.createTrack);
  app.get("/api", TracksController.findTrack);
  app.delete("/api/track/:id", TracksController.deleteTrack);
};
