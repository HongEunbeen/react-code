import logo from './logo.svg';
import './App.css';
import React , {useCallback, useState, useRef} from 'react';
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


const App =()=>{
  const [todos, setTodos] = useState(createBulkTodos);
  //useState의 기본값에 함수 넣어줌 
  //useState(createBuliTodos()) > 리렌더링될 때마다 createBuliTodos 함수가 호출되지만, 
  //useState(createBuliTodos)   > 파라미터를 함수 형태로 넣어주면 컴포넌트가 처음 렌더링될때만 createBuliTodos 함수 실행된다


  //useCallback을 사용했더라도 todos(두번째 파라미터)는 계속해서 변경되니 이 함수는 재사용을 하지 못하고 계속해서 새로 만들어진 함수를 사용하게 된다.
  //이걸 방지하기 위해서 useState의 함수형 업데이트 또는 useReducer를 사용해야 한다.
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
  const nextId = useRef(2501);

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
