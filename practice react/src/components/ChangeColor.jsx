import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ChangeThemeColor } from './features/theme';
const ChangeColor = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <button onClick={() => dispatch(ChangeThemeColor(color))}>
        Change color
      </button>
    </>
  );
};

export default ChangeColor;
