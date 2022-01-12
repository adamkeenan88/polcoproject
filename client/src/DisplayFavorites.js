import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayFavorites = (props) => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    console.log("useEffect triggered");
    axios
      .get("http://localhost:8000/api")
      .then((allTracks) => {
        console.log(allTracks.data.track);
        setTracks(allTracks.data.track);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteTrack = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8000/api/track/${id}`)
      .then((response) => {
        console.log("delete successful");
      })
      .catch((err) => console.log("error deleting track", err));
  };

  return (
    <div>
      <h2>Your Favorite Tracks:</h2>
      <tbody className="allTracks">
        {tracks
          ? tracks.length > 0 &&
            tracks.map((track, index) => (
              <tr key={index}>
                <td>{track.rank}</td>
                <td>{track.artist}</td>
                <td>{track.title}</td>
                <button
                  id="displayAdopt"
                  onClick={() => deleteTrack(track._id)}
                >
                  Remove Favorite
                </button>
              </tr>
            ))
          : "Tracks Loading"}
      </tbody>
    </div>
  );
};

export default DisplayFavorites;
