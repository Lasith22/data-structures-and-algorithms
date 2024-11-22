import ChangeColor from './components/ChangeColor';
import Login from './components/Login';
import Profile from './components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const theme = useSelector((state) => state.theme.value);
  return (
    <>
      <div
        style={{
          backgroundColor: theme,
        }}
      >
        <Profile />
        <Login />
        <ChangeColor />
      </div>
    </>
  );
}

export default App;
