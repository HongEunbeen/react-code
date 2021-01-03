import { useReducer } from 'react';

function reducer(state, action ){
    // //action은 그 어떤 값도 사용 가능 > 이벤트 객체가 지니고 있는 e.target 값 자체 액션 값으로 사용
    return {
        ...state,
        [action.name] : action.value
    };
}

export default function useInputs(initalForm){
    const[state, dispatch] = useReducer(reducer, initalForm);
    const onChange = e =>{
        dispatch(e.target);
    };
    return [state, onChange];
}