import React from 'react';
import { connect } from 'react-redux';
import Counter from '../component/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
   return(
       <Counter number={number} onDecrease={decrease} onIncrease={increase}/>
   );
};

const mapStateToProps = state => ({
    number : state.counter.number
});

const mapDispatchToProps = dispatch => ({
    increase : () => {
        dispatch(increase());
    },
    decrease : () => {
        dispatch(decrease());
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CounterContainer);