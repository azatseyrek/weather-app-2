import React from "react";
import "./result.css";

const Result = ({ weatherData}) => {
  return (
    <div className="result">
      <div className="result__container">
        <h2>Date</h2>

        <div className="result__list">
          <ul>
            <li>{weatherData[0].day.condition.text}</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
