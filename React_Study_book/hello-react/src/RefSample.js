import React, {Component} from 'react';
import './RefSample.css';

class RefSample extends Component {
    input = React.createRef();
    //컴포넌트 내부에서 멤버 변수로 React.createRef()를 담아주어야 된다
    handleFocus = () => {
        this.input.current.focus();
        //ref를 설정해 준 DOM에 접근하려면 this.input.current를 조회(.current 주으 ㅣ)
    }
    render(){
        return(
            <div >
                <input ref={(ref) => { this.input=ref}}/>
                {/* 콜백 함수를 통한 ref 설정 */}
                <input ref={this.input} />
                {/* 해당 멤버 변수를 ref를 달고자 하는 요소에 ref porps 넣어주면 ref 설정 완료*/}
            </div>
        );
    }
}

export default ValidationSample