import React, { useState, useContext } from 'react';
import { LoginContext } from './contexts/LoginContexts';

const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  return (
    <>
      <input
        type="text"
        placeholder="userName"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="password" />

      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Click
      </button>
    </>
  );
};

export default Login;
