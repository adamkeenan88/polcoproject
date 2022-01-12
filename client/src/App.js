import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DisplayFavorites from "./DisplayFavorites";
import { title } from "process";
/* eslint-disable no-unused-expressions*/

function App() {
  const [chart, setChart] = useState("");

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://billboard2.p.rapidapi.com/hot_100",
      params: { date: "2020-03-18" },
      headers: {
        "x-rapidapi-host": "billboard2.p.rapidapi.com",
        "x-rapidapi-key": "dd0f240ef0msh61ee024403845dfp18f505jsn19ef90bf7c26",
      },
    };
    axios
      .request(options)
      .then(function (response) {
        setChart(response.data);
        console.log(chart);
      })
      .catch(function (error) {
        console.error(error);
      }),
      [];
  });

  const like = (e) => {
    e.preventDefault();
    console.log("success");
    const newTrackData = { rank, artist, title };
    console.log(newTrackData);
    axios
      .post("http://localhost:8000/api/track", newTrackData)
      .then((newTrack) => {
        console.log(newTrack);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      {chart
        ? chart.length > 0 &&
          chart.map((song, index) => (
            <div>
              <p>
                {song.rank} <span>{song.title}</span> <span>{song.artist}</span>{" "}
                <span>
                  <button
                    onClick={(e) => {
                      const rank = song.rank;
                      const artist = song.artist;
                      const title = song.title;
                      like(rank, artist, title);
                    }}
                  >
                    Favorite
                  </button>
                </span>
              </p>
            </div>
          ))
        : "Chart Loading"}
      <hr></hr>
      <DisplayFavorites />
    </div>
  );
}

export default App;
