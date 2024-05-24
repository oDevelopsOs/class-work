import './App.css';
import { useState } from "react";

const api = {
  key: "33d3e7cb91c6bf0067673cccd76111e8",
  base: "https://api.openweathermap.org/data/2.5/",
};

function Weather() {
  const [search, setSearch]=useState("");
  const [weather, setWeather]=useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}&lang=fr`)
    .then((res) => res.json())
    .then((result)=>{
      setWeather(result);
    });
  };
  return (
    <div className="App">
      <headers className="App-header">
        <h1>Weather App</h1>
        <div>
          <input
          type="text"
          placeholder='Rechercher...'
          onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Rechercher</button>
        </div>
          {typeof weather.main !== "undefined" ? (
            <div>
              <p>{weather.name}</p>
              <p>{weather.main.temp}°C</p>
              <p>{weather.weather[0].main}</p>
              <p>{weather.weather[0].description}</p>
            </div>
            ) : (
              ""
            )}
      </headers>
    </div>
  );
}

export default Weather;