import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("Paris");
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      
      // console.log(response.data);
      setWeatherData(response.data.forecast.forecastday);
    });
    console.log(weatherData);
  }, [city]);

  const url = `${process.env.REACT_APP_URL}${city}"&days=3&aqi=no&alerts=no"`;

  return (
    <div className="App">
      <div className="container">
        <Search setCity={setCity} />

        <Result weatherData={weatherData}/>

      

      </div>
    </div>
  );
}

export default App;
