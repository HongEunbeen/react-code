import React, { Component } from 'react';

class EventPracties extends Component {

    state = {
        message : '',
        username : ''
    }
    constructor(props){
        super(props);
        //this.handleChange = this.handleChange.bind(this);
        //this.handleClick = this.handleClick.bind(this);
        //바인딩 하지 않은 경우라면 this가 undefined를 가르키게 된다
        //메서드가 이벤트로 등록되어도  this를 컴포넌트 자신으로 가르키기 위해 메서드 this 와 바인딩(binding)하는 작업 필요
    }

    //바벨의 transform-class-properties 문법 사용해 화살표 함수 형태로 메서드 정의!
    //Babel is a JavaScript compiler - (바벨은 자바 스크립트 컴파일러입니다)

    handleChange = (e) => {
        this.setState({
           //message : e.target.value
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) => {
        alert(this.state.username + ' : ' + this.state.message);
        this.setState({
            message : '',
            username : ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    /*
    handleChange(e){
        this.setState({
            message : e.target.value
        });
        console.log(e.target.value);
    }

    handleClick(e){
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }
    */

    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChange}
                />
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>
                확인
                </button>
            </div>
        );
    }
}

export default EventPracties_class;