import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Hello = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post('https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol',
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <h1>HEllo lasith</h1>
      {data.map((data, index) => {
        return <p key={index}>{data.email}</p>;
      })}
    </>
  );
};

export default Hello;
