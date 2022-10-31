import React, { useState, useEffect } from ‘react‘;


const Info = () => {
  const [name, setName] = useState(“);
  const [nickname, setNickname] = useState(“);
  useEffect(() => {
    console.log(‘effect‘);
    console.log(name);
    return () => {
      console.log(‘cleanup‘);
      console.log(name);
    };
  });
 
  const onChangeName = e => {
    setName(e.target.value);
  };



const onChangeNickname = e => {
    setNickname(e.target.value);
  };



return (
    (…)
  );
};



export default Info;