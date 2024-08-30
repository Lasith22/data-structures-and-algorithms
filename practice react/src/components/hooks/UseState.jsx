import React, { useState } from "react";

const UseState = () => {
  const [changeColor, setChangeColor] = useState("red");
  return (
    <div>
      <button
        onClick={() => {
          setChangeColor("red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          setChangeColor("blue");
        }}
      >
        Blue
      </button>
      <h1
        style={{
          color: changeColor,
        }}
      >
        Hello
      </h1>
    </div>
  );
};

export default UseState;
