import React, { useState, useMemo } from 'react';

const ExpensiveCalculationComponent = () => {
  const [count, setCount] = useState(0);

  // Expensive calculation is wrapped in useMemo
  const memoizedResult = useMemo(() => {
    console.log('Calculating...');
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // Only re-run when `count` changes

  return (
    <div>
      <h1>Expensive Calculation Result: {memoizedResult}</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
};

export default ExpensiveCalculationComponent;
