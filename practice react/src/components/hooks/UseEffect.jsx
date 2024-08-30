import React, { useEffect, useState } from "react";

const TestUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, []);
  return (
    <>
      <h1>I have render {count} times</h1>
    </>
  );
};

export default TestUseEffect;
