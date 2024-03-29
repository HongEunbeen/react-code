import React , { useReducer } from 'react';//useSatae 가져옴


function reducer(state, action){

    //action.type에 따라 다른 작업 수행
    switch(action.type) {
        case 'INCREMENT' : 
            return {value : state.value + 1};
        case 'DECREMENT' : 
            return {value : state.value - 1};
        default :
            //아무것도 해당되지 않을 때 기존 상태 변환
            return state;
    }
}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer , {value : 0});
    //useReducer(리듀서 함수 , 해당 리듀서의 기본값)
    //useReducer return > state 값 : 현재 가리키고 있는 상태, dispatch 함수 : 액션을 발생시키는 함수
    //dispatch(action) > 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수 호출 구조
    
    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value }</b>입니다.
                <button onClick={() => dispatch({type : 'INCREMENT'})}>+1</button>
                <button onClick={() => dispatch({type : 'DECREMENT'})}>-1</button>
            </p>
        </div>
    );
}

export default Counter;