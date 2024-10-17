import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logOut } from './features/user';
const Login = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h1>Login</h1>
      <button
        onClick={() => {
          dispatch(
            login({
              name: 'lasith',
              age: 20,
              email: 'pakay@gami.com',
            }),
          );
        }}
      >
        Login....
      </button>
      <h1
        onClick={() => {
          dispatch(
            logOut({
              name: '',
              age: 0,
              email: '',
            }),
          );
        }}
      >
        LogOut
      </h1>
    </>
  );
};

export default Login;
