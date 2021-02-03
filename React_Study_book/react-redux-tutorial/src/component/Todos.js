import React from 'react';

//TodoItem 컴포넌트 1
const TodoItem = ({todo, onToggle, onRemove}) => {
  return (
    <div>  
        <input type="checkbox"/>
        <span>예제 테스트</span>
        <button>삭제</button>
    </div>
  );
};

//Todos 컴포넌트 2
const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input />
                <button type="submit">등록</button>
            </form>
            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    )
};

export default Todos;