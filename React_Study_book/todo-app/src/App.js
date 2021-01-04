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

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
      //배열의 불변성을 지키면서 배열 원소를 제거해야 된다
      //filter > 기존의 배열은 그대로 둔 상태에서 특정 조건 만족 원소만 따로 추출해 새로운 배열 만들어 준다
      //조건의 활인해 주는 함수(boolean 값) : 파라미터 > true 만 새로운 배열에 존재
    },
    [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(
        //배열 내장 함수 map을 사용해 특정 id 가지고 있는 객체의 checked 값을 반전시켜 준다.
        //배열의 분별성 유지하면서 특정 배열 원소 업데이트
        //배열의 분별성 유지 추출(삭제) : filter / 배열의 분별성 유지 업데이트 : map
        todos.map(todo =>
          todo.id === id ? { ... todo , checked : !todo.checked} : todo
          )
      );
    },
    [todos]
  );

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
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
