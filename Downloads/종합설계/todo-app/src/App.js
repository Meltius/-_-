import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: </span><span class="cd2 co31">할</span> <span class="cd2 co31">일</span> <span class="cd2 co49">${</span><span class="cd2 co33">i</span><span class="cd2 co49">}</span><span class="cd2 co31">,
      checked: false,
    });
  }
  return array;
}



const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);



// 고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);



(…)
};



export default App;