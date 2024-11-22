import { useState } from 'react';
import Hello from '../src/components/jsx/Hello';
import LearnProps from './components/props/LearnProps';
import DisplayCount from './components/props/DisplayCount';
import UseState from './components/hooks/UseState';
import TestUseEffect from './components/hooks/UseEffect';
import UseRef from './components/hooks/UseRef';
import ReduxCounter from './components/redux1/ReduxCounter';
function App() {
  return (
    <>
      <ReduxCounter />
    </>
  );
}

export default App;
