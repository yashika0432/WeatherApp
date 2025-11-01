import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox() {
  let [city, setcity] = useState("");
  let handlechange = (evnt) => {
    setcity(evnt.target.value);
  };

  let handlesubmit = (evnt) => {
    evnt.preventDefault();
    console.log(city);
    setcity("");
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
