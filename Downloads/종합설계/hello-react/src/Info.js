import React, { useState, useEffect } from ‘react‘;


const Info = () => {
  const [name, setName] = useState(“);
  const [nickname, setNickname] = useState(“);
  useEffect(() => {
    console.log('마운트될 때만 실행됩니다.');
  }, []);
 
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