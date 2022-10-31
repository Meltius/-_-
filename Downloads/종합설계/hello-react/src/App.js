import React from 'react';
 
function App() {
  const name = '뤼왝트';
  return <div>{name === '리액트' ? <h1>리액트입니다.</h1> : null}</div>;
}
 
export default App;