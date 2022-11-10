import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';


const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: “, username: “ });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });



// input 수정을 위한 함수
  const onChange = useCallback(
    e => {
      const { name, value } = e.target;
      setForm(
        produce(form, draft => {
          draft[name] = value;
        })
      );
    },
    [form]
  );



// form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };



  <span class="co44">// array</span><span class="co44">에</span> <span class="co44">새</span> <span class="co44">항목</span> <span class="co44">등록</span>
  <span class="co47">setData</span><span class="co33">(</span>
    <span class="cd2 co47">produce</span><span class="cd2 co33">(data,</span> <span class="cd2 co33">draft</span> <span class="cd2 co46">=&gt;</span> <span class="cd2 co33">{</span>
      <span class="cd2 co34">draft</span><span class="cd2 co33">.</span><span class="cd2 co34">array</span><span class="cd2 co33">.</span><span class="cd2 co47">push</span><span class="cd2 co33">(info);</span>
    <span class="cd2 co33">})</span>
  <span class="co33">);</span>

  <span class="co44">// form </span><span class="co44">초기화</span>
  <span class="co47">setForm</span><span class="co33">({</span>


        name: ",
        username: "
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );



// 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(data, draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    [data]
  );



return (...);
};



export default App;