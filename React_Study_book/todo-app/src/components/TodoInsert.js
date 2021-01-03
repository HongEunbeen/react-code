import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) =>{

    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    },[]);

    //호출되면 props로 받아 온 onInsert 함수에 현재 value 값을 파라미터로 넣어 호출 > 현재 value 값 초기화
    const onSubmit = useCallback(//onClick 이 아닌 onSubmit으로 하면 enter로 먹는다.
        e => {
            onInsert(value);
            setValue('');//value 값 초기화

            //submit 이벤트는 브라우저에서 새로고침을 발생시킴
            //이를 방지 위해 이 함수 호출 
            e.preventDefault(); //새로고침 방지
        },
        [onInsert, value]
    );

    return(
       <form className="TodoInsert" onSubmit={onSubmit}>
           <input placeholder="할 일을 입력하세요" 
           value={value}
           onChange={onChange}/>
           <button type="submit">
               <MdAdd />
           </button>
       </form>
    );
};


export default TodoInsert;