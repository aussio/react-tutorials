import React from "react";
import "./NasaPic.css";

function NasaPic({ date, explanation, url }) {
  return (
    <div className="NasaPic">
      <img src={url} alt="" />
      <h1>{date}</h1>
      <p>{explanation}</p>
    </div>
  );
}

export default NasaPic;
