import logo from './logo.svg';
import './App.css';
import React , {useCallback, useState, useRef} from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App =()=>{
  const [todos, setTodos] = useState([
    {
      id : 1,
      text : 'm',
      checked : true
    },
    {
      id : 2,
      text : 'mb',
      checked : true
    },
    {
      id : 3,
      text : 'mbc',
      checked : false
    },
  ]);
  //고윳값으로 사용될 id > 렌더링 필요 x 으로 useState가 아닌 useRef 사용해 컴포넌트에서 사용할 변수 생성
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; 
    },
    [todos],
  );

  //props로 전달해야 할 함수를 만들 때는 useCallback으로 함수 감싸주기
  return (
    <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos}/>
    </TodoTemplate>
  );
}

export default App;
