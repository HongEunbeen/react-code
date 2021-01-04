import logo from './logo.svg';
import './App.css';
import React , {useCallback, useState, useRef, useReducer} from 'react';
import TodoTemplate from './components/TodoTemplate.js';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos(){
  const array = [];
  for(let i = 1; i <= 2500; i++){
    array.push({
      id : i,
      text : '할 일 ${i}',
      checked : false
    });
  }
  return array;
}

function todoReducer(todos, action){
  switch(action.type){
    case 'INSERT' : //새로 추가
      //{type : 'INSERT' , todo : {id : 1, text : 'todo', checked : false}}
      return todos.concat(action.todo); 
    case 'REMOVE' : //제거
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' : //토글
      return  todos.map(todo => todo.id === action.id ? { ... todo , checked : !todo.checked} : todo);
    default:
      return todos;
      
  }
}


const App =()=>{
  
  const[todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  //원래 두 번째 파라미터에 초기 상태를 넣어 주어야 한다
  //지금은 undefined 넣고 세번째 파라미터에 초기 상태를 만들어 주는 함수 createBulkTodo 넣어준다.
  //이렇게 하면 컴포넌트가 맨 처음 렌더링 시에만 createBulkTodos 함수 호출


  //함수형 업데이트
  const onRemove = useCallback(
    id => {
      dispatch({type : 'REMOVE', id});
    },
    []//컴포넌트가 렌더링 될 때 만들었던 함수를 계속해서 재 사용
  );

  const onToggle = useCallback(
    id => {
      dispatch({type : 'TOGGLE', id});
    },
    []
  );

  //고윳값으로 사용될 id > 렌더링 필요 x 으로 useState가 아닌 useRef 사용해 컴포넌트에서 사용할 변수 생성
  //ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    text => {
      const todo = {
        id : nextId.current,
        text,
        checked : false
      };
      dispatch({type : 'INSERT', todo});
      nextId.current += 1; 
    },
    [],
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






