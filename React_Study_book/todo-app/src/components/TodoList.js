import React, { useCallback } from 'react';
import TodoListItem from './TodoListItem';
import { List } from 'react-virtualized'; 
import './TodoList.scss';

const TodoList = ({todos , onRemove, onToggle}) => {

    //List 컴포넌트를 사용하기 위해 rowRenderer 함수 작성
    // > react-virualized의 List 컴포넌트에서 각 TodoItem 렌더링할 때 사용
    // > 이 함수를 List 컴포넌트의 props로 설정해 주기
    // > 파라미터 index, key, style 값을 객체 타입으로 받아 와서 사용
    const rowRenderer = useCallback(
        ({index, key, style}) => {
            const todo = todos[index];
            return(
                <TodoListItem
                todo={todo}
                key={key}
                onRemove={onRemove}
                onToggle={onToggle}
                style={style}
                />
            );
        },
        [onRemove, onToggle, todos],
    );

    return(
        <List
        className="TodoList"
        width={512}//전체 크기
        height={513}//전체 높이
        rowCount={todos.length}//항목 개수
        rowHeight={57}//항목 높이
        rowRenderer={rowRenderer}//항목을 렌더링할 때 쓰는 함수
        list={todos}//배역
        style={{outline : 'none'}}//List에 기본 적용되는 outline 스타일 제거
        />
    );
    //List 컴포넌트를 사용할 때는 해당 리스트의 전체 크기/각 항목의 높이/각항목을 렌더링할 때 사용 함수/배열 > props 넣어주기 > 자동으로 최적화 해줌
}
//여러 종류의 값을 전달해야 하는 경우에는 객체로 통째로 전달하는 편이 나중에 성능 최적화 시 편리하다.
export default React.memo(TodoList);