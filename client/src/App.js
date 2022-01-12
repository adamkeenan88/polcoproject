import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import DisplayFavorites from "./DisplayFavorites";
/* eslint-disable no-unused-expressions*/

function App() {
  const [chart, setChart] = useState("");
  const [date, setDate] = useState("");

  const getChartTracks = (date) => {
    const options = {
      method: "GET",
      url: "https://billboard2.p.rapidapi.com/hot_100",
      params: { date: `${date}` },
      headers: {
        "x-rapidapi-host": "billboard2.p.rapidapi.com",
        "x-rapidapi-key": "cc707e1543msh1613eed412bd590p1b1c0djsn527e766c0e9c",
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
  };

  // useEffect(() => {
  //   axios
  //     .post("http://localhost:8000/api/track", chart)
  //     .then((response) => {
  //       console.log(response.data._id);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [chart]);
  // const like = (e) => {
  //   e.preventDefault();
  //   console.log("success");
  //   const newTrackData = { rank, artist, title };
  //   console.log(newTrackData);
  //   axios
  //     .post("http://localhost:8000/api/track", newTrackData)
  //     .then((newTrack) => {
  //       console.log(newTrack);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  return (
    <div className="App">
      <div>
        <form onSubmit={getChartTracks(date)}>
          <input
            type="text"
            placeholder="Enter Date yyyy-mm-dd (Saturdays Only)"
            onChange={(e) => setDate(e.target.value)}
          ></input>
          <button>Submit</button>
        </form>
      </div>
      {chart
        ? chart.length > 0 &&
          chart.map((song, index) => (
            <div>
              <p>
                {song.rank} <span>{song.title}</span> <span>{song.artist}</span>{" "}
                <span>
                  <button
                  // onClick={(e) => {
                  //   const rank = song.rank;
                  //   const artist = song.artist;
                  //   const title = song.title;
                  //   like(rank, artist, title);
                  // }}
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
