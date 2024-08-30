import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [value, setValue] = useState(0);

  const count = useRef(100);
  console.log("count", count);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1> {value}</h1>

      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>{count.current}</h1>
    </>
  );
};

export default UseRef;
