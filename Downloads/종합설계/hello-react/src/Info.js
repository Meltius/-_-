import React, { useState, useEffect } from ‘react‘;


const Info = () => {
  const [name, setName] = useState(“);
  const [nickname, setNickname] = useState(“);
  useEffect(() => {
    console.log(name);
  }, [name]);
 
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