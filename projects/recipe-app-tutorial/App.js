import React, { useEffect, useState } from "react";
import "./App.css";
import NasaPic from "./NasaPic";
import { getNasaPicsOfTheWeek } from "./nasaAPI";

function App() {
  const [nasaPics, setNasaPics] = useState([]);

  useEffect(() => {
    getNasaPicsOfTheWeek(setNasaPics).then(pics => setNasaPics(pics));
  }, []);

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="picture-container">
        {nasaPics.map(picture => (
          <NasaPic
            key={picture.url}
            date={picture.date}
            explanation={picture.explanation}
            url={picture.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
