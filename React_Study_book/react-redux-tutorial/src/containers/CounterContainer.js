import React from 'react';
import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
   return(
       <Counter number={number} onDecrease={decrease} onIncrease={increase}/>
   );
};

export default connect(
    state => ({
        number : state.counter.number
    }),
    dispatch => ({
        //리덕스 제공하는 bindActionCreators 유틸 함수 사용
        increase : () => {
            dispatch(increase());
        },
        decrease : () => {
            dispatch(decrease());
        },
    })
)(CounterContainer);