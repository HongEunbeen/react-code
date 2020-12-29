import React, {Component} from 'react';

class ScrollBox extends Component {

    // 주의점
    // 문법상 onClick = {this.scrollBox.scrollBottonm} 형식 가능 but 랜더링 문제로 undefined 
    // onClick = () => {this.scrollBox.scrollBottonm} 으로 화살표 함수 사용해서 버튼을 누를 떄 값을 읽어 올 수 있도록 한다.
    scrollToBottom = () =>{
        const {scrollHeight, clientHeight} = this.box;
        /*비구조화 할당 문법 
        const scrollHeight = this.box.scrollHeight; 
        DOM 노드가 이미 가지고 있는 값*/

        this.box.scrollTop = scrollHeight - clientHeight;
    }

    render(){
        const style = {
            border : '1px solid black',
            height : '300px',
            width : '300px',
            overflow : 'auto',
            position : 'relative'
        };

        const innerStyle = {
            width : '100%',
            height : '650px',
            background : 'linear-gradient(white, black)'
        };

        return(
            <div
            style={style}
            ref={(ref) => {this.box=ref}}>
                <div style={innerStyle}/>
            </div>
        );
    }
}

export default ScrollBox