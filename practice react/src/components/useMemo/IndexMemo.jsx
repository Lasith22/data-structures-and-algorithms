import { useState, memo } from 'react';

// Move the swatch function outside of PracticeMemo to avoid redefinition
const Swatch = ({ color }) => {
  console.log('swatch rendered', color);
  return (
    <div
      style={{
        width: 75,
        height: 75,
        backgroundColor: color,
      }}
    ></div>
  );
};

const MemomedSwatch = memo(Swatch);

const PracticeMemo = () => {
  const [appRenderIndex, setAppRenderIndex] = useState(0);

  console.log('app rendered', appRenderIndex);

  return (
    <div>
      <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
        Re-render app
      </button>
      <div>
        <MemomedSwatch color="red" />
      </div>
    </div>
  );
};

export default PracticeMemo;
