import { useState } from 'react';
import Hello from '../src/components/jsx/Hello';
import LearnProps from './components/props/LearnProps';
import DisplayCount from './components/props/DisplayCount';

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      {/* <Hello /> */}
      <LearnProps name="lasithsss" />
      <DisplayCount count={count} setCount={setCount} />
    </>
  );
}

export default App;
