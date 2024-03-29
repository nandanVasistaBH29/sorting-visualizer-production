import React, { useState } from "react";
import { allCodes } from "./AllCode";
import "./Code.css";
const Code = ({ algoNumber }) => {
  const [code, setCode] = useState("");
  const handleClick = (index) => {
    setCode(() => {
      const text = allCodes[algoNumber][index].code;
      setCode(text);
    });
  };
  const languages = ["Java", "C++", "C", "JS", "Python"];
  return (
    <span className="code">
      <span className="program">
        <span className="options">
          {algoNumber === 0 ? (
            <>
              <h1>Hello Programmer</h1>
              <p style={{ color: "lightcoral" }}>
                Click On Language Before Running the visualizer
              </p>
            </>
          ) : (
            languages.map((lang, index) => {
              return (
                <button key={index} onClick={() => handleClick(index)}>
                  <h2 key={index}>{lang}</h2>
                </button>
              );
            })
          )}
        </span>
        <pre>{code}</pre>
      </span>
    </span>
  );
};

export default Code;
