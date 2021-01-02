import React, { Component }  from 'react';


//부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number  값을 1씩 더한다.
class LifeCycleSample extends Component{
    state = {
        number : 0,
        color : null
    }
    myRef = null //ref 설정 부분

    constructor(props) {
        super(props);
        console.log('constructor');
    }

    
    static getDerivedStateFromProps(nextProps, prevState){
        //부모에게서 받은 color 값을 state 에 동기화
        //컴포넌트가 마운트될 때와 업데이트 시 호출
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return {color : nextProps.color}
        }
        return null;
    }

    componentDidMount(){
        console.log('componentDidMount');
        //첫 렌더링 마친 후 호출
    }

    shouldComponentUpdate(nextProps, nextState){
        //props 또는 state 변경 시 리렌더링 시작 여부 지정
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        });
    };

    getSnapshotBeforeUpdate(prevProps, prevState){
        //DOM에 변화가 일어나기 직전의 색상 속성 snapshot 값으로 반환
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('compoennetDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상 : ' , snapshot);
        }
    }

    render(){
        console.log('render');
        const style = {
            color : this.props.color
        };
        return(
            <div>
                {/*{this.props.missing.value}{/*에러 발생*/}
                <h1 style={style} ref={ref=> this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color} </p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        );
    }
}

export default LifeCycleSample



/*
 statice getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.value !== prevState.value){ // 조건에 따라 특정 값 동기화
        return{value : nextProps.value};
    }
    return null : //state를 변경할 필요가 없다면 null을 반환
 }

 getSnapshotBeforeUpdate(prevProps, prevState){
     if(preState.array !== this.state.array){
         const {scrollTop, scrollHeight} = this.list
         return {scrollTop, ScrollHeight}l
     }
 }

 componentDidCatch(error, info){
     this.setState({
         error : true
     });
     console.log({error, info});
 }
*/