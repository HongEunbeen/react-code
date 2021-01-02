import React, { Component }  from 'react';


//부모 컴포넌트에서 props로 색상을 받아 버튼을 누르면 state.number  값을 1씩 더한다.
class ErrorBoundary extends Component{
    state = {
        error : false
    };
    componentDidCatch(error, info){
        //에러 발생시 메서드 호출
        this.setState({
            error : true //this.state.error 값을 true로 업데이트
        });
        console.log({error, info});
    }

    render(){
        //true 시 에러 문구 보여줌
        if(this.state.error) return <div>에러가 발생했습니다!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary