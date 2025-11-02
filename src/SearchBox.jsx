import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setcity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "784f210d1405df9c2a7d6250aadf1a4a";

  let getweatherinfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let Jsonresponse = await response.json();
    console.log(Jsonresponse);

    let result = {
      temp: Jsonresponse.main.temp,
      tempMin: Jsonresponse.main.temp_min,
      tempMax: Jsonresponse.main.temp_max,
      humidity: Jsonresponse.main.humidity,
      feelsLike: Jsonresponse.main.feels_like,
      weather: Jsonresponse.weather[0].description,
    };
    console.log(result);
  };

  let handlechange = (evnt) => {
    setcity(evnt.target.value);
  };

  let handlesubmit = (evnt) => {
    evnt.preventDefault();
    console.log(city);
    setcity("");
    getweatherinfo();
  };

  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handlesubmit}>
        <TextField
          id="city"
          label="City-name"
          variant="outlined"
          required
          value={city}
          onChange={handlechange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
