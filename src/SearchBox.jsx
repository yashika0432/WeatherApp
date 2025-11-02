import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateinfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "784f210d1405df9c2a7d6250aadf1a4a";

  let getweatherinfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      let Jsonresponse = await response.json();
      console.log(Jsonresponse);

      let result = {
        city,
        temp: Jsonresponse.main.temp,
        tempMin: Jsonresponse.main.temp_min,
        tempMax: Jsonresponse.main.temp_max,
        humidity: Jsonresponse.main.humidity,
        feelsLike: Jsonresponse.main.feels_like,
        weather: Jsonresponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handlechange = (evnt) => {
    setcity(evnt.target.value);
  };

  let handlesubmit = async (evnt) => {
    try {
      evnt.preventDefault();
      console.log(city);
      setcity("");
      let newinfo = await getweatherinfo();
      updateinfo(newinfo);
    } catch (err) {
      seterror(true);
    }
  };

  return (
    <div className="SearchBox">
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
        {error && <p style={{ color: "red" }}>No such place exists</p>}
      </form>
    </div>
  );
}
