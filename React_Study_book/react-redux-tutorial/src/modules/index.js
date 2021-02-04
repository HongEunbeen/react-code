import {combineReducers} from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
    counter,
    todos,
});

export default rootReducer;
//createStore 함수를 사용해 스토어 생성시 리듀서 하나만 사용!
//기존에 만들었던 리쥬서를 하나로 합쳐 주어야 한다
//리덕스에서 제공하는 combineReducers 유틸 함수 사용해 처리