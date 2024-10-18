import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <h1>profile</h1>
      <p>Name :{user.name} </p>
      <p>age:</p>
    </>
  );
};

export default Profile;
