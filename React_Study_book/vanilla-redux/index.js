import {createStore} from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

//액션 이름 정의
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

//액션 생선 함수 (액션 이름을 사용하여 액션 객체를 만든다.)
const toogleSwtich = () => ({type : TOGGLE_SWITCH});
const increase = diffirence => ({type : INCREASE});
const decrease = () => ({type : DECREASE});

//초깃값 설정 (형태 자유)
const initalState = {
    toggle : false,
    counter : 0
};

//리듀서 함수 정의(리듀서는 변화를 일으키는 함수)
//state가 undefined일 때는 initalState를 기본값으로 설정
function reducer(state = initalState, action){
    switch(action.type){
        case TOGGLE_SWITCH:
            return {
                ...state,
                toogle : !state.toggle
            };
        case INCREASE:
            return {
                ...state,
                counter : state.counter + action.difference
            };
        case DECREASE:
            return {
                ...state,
                counter: state.counter - 1
            };
        default : 
            return state;
    }
}
//리듀서에서는 상태의 불변성을 유지하면서 데이터에 변화를 일으켜 주어야 한다.

//스토어 만들기
const store = createStore(reducer);

//스토어 내장 함수 사용
//상태가 업데이트될 때마다 호출 -> 리액트의 render 함수와는 다르게 이미 html을 사용하여 만들어진 UI 속성을 상태에 따라 변경
const render = () => {
    const state = store.getState();
    //토글 처리
    if(state.toggle){
        divToggle.classList.add('active');
    }else{
        divToggle.classList.remove('active');
    }
    //카운터 처리
    counter.innerText = state.counter;
}

render();

//구독하기 - 스토어의 상태가 바뀔 때마다 방금 만든 render 함수가 호출되도록
//subscribe - 파라미터로 함수 형태의 값 전달 -> 전달된 함수는 추후 액션이 발생하여 상태가 업데이트될 때마다 호출
store.subscribe(render);

//액션 발생시키기
divToggle.onclick = () => {
    store.dispatch(toogleSwtich());
};
btnIncrease.onclick = () => {
    store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
    store.dispatch(decrease());
}
