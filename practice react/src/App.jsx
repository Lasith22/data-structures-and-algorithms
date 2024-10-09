import { useState } from 'react';
import Hello from '../src/components/jsx/Hello';
import LearnProps from './components/props/LearnProps';
import DisplayCount from './components/props/DisplayCount';
import UseState from './components/hooks/UseState';
import TestUseEffect from './components/hooks/UseEffect';
import UseRef from './components/hooks/UseRef';
import PracticeMemo from '../src/components/useMemo/IndexMemo';
function App() {
  return (
    <>
      <PracticeMemo />
    </>
  );
}

export default App;
