import React from ‘react‘;


function App() {
  const name = ‘리액트‘;
  const style = {
    // background-color는 backgroundColor와 같이 -가 사라지고 카멜 표기법으로 작성됩니다.
    backgroundColor: ‘black‘,
    color: ‘aqua‘,
    fontSize: ‘48px‘, // font-size -> fontSize
    fontWeight: ‘bold‘, // font-weight -> fontWeight
    padding: 16 // 단위를 생략하면 px로 지정됩니다.
  };
  return <div style={style}>{name} </div>;
}



export default App;