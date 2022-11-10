import React, { useRef, useCallback, useState } from 'react';
import produce from 'immer';
 
const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });
 
  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(
      produce(draft => {
        draft[name] = value;
      })
    );
  }, []);
 
  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
 
      // array에 새 항목 등록
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );
 
      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );
 
  // 항목을 삭제하는 함수
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      );
    },
    []
  );
 
  return (...);
};
 
export default App;