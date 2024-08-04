import React from 'react';
import Button from '../props/Button';

const DisplayCount = (props) => {
  return (
    <div>
      <h1>JHE</h1>
      {props.count}
      <Button setCount={props.setCount} />
    </div>
  );
};

export default DisplayCount;
