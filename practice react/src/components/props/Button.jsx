import React from 'react';

function Button(props) {
  return (
    <button
      onClick={() => {
        props.setCount((count) => count + 1);
      }}
    >
      Increase Count
    </button>
  );
}
export default Button;
