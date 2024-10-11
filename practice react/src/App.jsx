import { useState } from 'react';
import Hello from '../src/components/jsx/Hello';
import LearnProps from './components/props/LearnProps';
import DisplayCount from './components/props/DisplayCount';
import UseState from './components/hooks/UseState';
import TestUseEffect from './components/hooks/UseEffect';
import UseRef from './components/hooks/UseRef';
import PracticeMemo from '../src/components/useMemo/IndexMemo';
import ExpensiveCalculationComponent from './components/useMemo/ExpensiveCalculationComponent';
import Login from './components/contextApi/Login';
import Profile from './components/contextApi/Profile';
import { LoginContext } from './components/contextApi/contexts/LoginContexts';
function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState('');
  return (
    <>
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </>
  );
}

export default App;
