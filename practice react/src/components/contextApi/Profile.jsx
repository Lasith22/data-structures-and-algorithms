import React, { useContext } from 'react';

import { LoginContext } from './contexts/LoginContexts';

const Profile = () => {
  const { username } = useContext(LoginContext);
  return (
    <>
      <h1>Profile</h1>
      <h1>UserName : {username}</h1>
    </>
  );
};

export default Profile;
