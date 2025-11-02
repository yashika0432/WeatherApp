import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function Weatherapp() {
  const [weatherinfo, setweatherinfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });
  let updateinfo = (newinfo) => {
    setweatherinfo(newinfo);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Weather app</h2>
      <SearchBox updateinfo={updateinfo} />
      <InfoBox info={weatherinfo} />
    </div>
  );
}
