import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';


const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text , checked} = todo;
    return(
        <div className="TodoListItem-virtualized" style={style}>{/*render 함수에서 기존에 보여 주던 내용 div로 한 번 감싼다*/}
            {/*TodoListItem-virtualized 클래스를 만든 것은 컴포넌트 사이사이에 테두리를 제대로 , 홀짝 다른 배경 색상 설정*/}
            <div className="TodoListItem">
                <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => onRemove(id)}>
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );  
}

export default React.memo(TodoListItem);
//TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지 않는다