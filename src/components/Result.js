import React from "react";
import "./result.css";

const Result = ({ date, temp, condition, conditionIcon}) => {
  return (
    <div className="result">
  
        <div className="result__list">


            <ul>
            <li><span className="date">{date}</span></li>
              <li>{temp}°C</li>
              <li className="condition">{condition}</li>
              <li>
                <img src={conditionIcon} alt="icon" />
              </li>
            </ul>

        </div>
      {/* </div> */}
    </div>
  );
};

export default Result;
