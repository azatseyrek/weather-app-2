import React, { useState } from "react";
import "./search.css";

const Search = ({setCity }) => {
  const [inputText, setinputText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setinputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText === "") {
      alert("City name is empty!");
    } else {
      setCity(inputText);
    }
    setinputText("");
  };

  return (
    <div className="search__container">
      <div className="search">
        <input
          value={inputText}
          placeholder="City Name"
          type="text"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
};

export default Search;
