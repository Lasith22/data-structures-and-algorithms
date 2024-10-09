import { useState } from 'react';
import Hello from '../src/components/jsx/Hello';
import LearnProps from './components/props/LearnProps';
import DisplayCount from './components/props/DisplayCount';
import UseState from './components/hooks/UseState';
import TestUseEffect from './components/hooks/UseEffect';
import UseRef from './components/hooks/UseRef';
function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Hello />
      {/* <LearnProps name="lasithsss" />
      <DisplayCount count={count} setCount={setCount} /> */}
      {/* <UseState /> */}
      {/* <TestUseEffect /> */}
      {/* <UseRef /> */}
    </>
  );
}

export default App;
