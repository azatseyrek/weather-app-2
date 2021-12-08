import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {

    const getData = () => {
      try {
        axios.get(url).then((response) => { 
          // console.log(response.data);
          setWeatherData(response.data.forecast.forecastday);
    
        });
        console.log(weatherData);
      }
          catch(err) {
            console.log(err);
          }

      }
     getData()
  }, [city]);

  const url = `${process.env.REACT_APP_URL}${city}"&days=3&aqi=no&alerts=no"`;

  return (
    <div className="App">
      <div className="container">
        <Search setCity={setCity} />
        <div className="city-name">{city.toUpperCase()}</div>
        {weatherData ? weatherData.map((item) => <Result key={item.date} city={city} date={item.date} temp={item.day.avgtemp_c} condition={item.day.condition.text} conditionIcon={item.day.condition.icon}  />) : "" }

      </div>
    </div>
  );
}

export default App;
