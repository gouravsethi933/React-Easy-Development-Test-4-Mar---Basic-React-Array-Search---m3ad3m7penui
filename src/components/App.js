import React from "react";
import { useState } from "react";
import "../styles/App.css";

const searchArray = [
  "Newton",
  "School",
  "Newton School",
  "React",
  "Preact",
  "Node",
  "Mongoose",
  "Angular",
  "Vue",
  "Apple",
  "Microsoft",
  "Netflix",
  "Meta"
];
function App() {
  const [searchValue, setSearchValue] = useState(" ");
  return (
    <div id="main">
      <input
        type="text"
        name="search"
        id="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <ul>
        {searchArray
          .filter((name) => name.match(new RegExp(searchValue, "i")))
          .map((name) => {
            return <li key={name}>{name}</li>;
          })}
      </ul>
    </div>
  );
}

export default App;
