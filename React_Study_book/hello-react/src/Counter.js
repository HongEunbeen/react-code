import React, {Component} from 'react';

class Counter extends Component{
    // constructor(props){
    //     super(props); //현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출해 준다.
    //     //state의 초기값 설정하기
    //     this.state = { //컴포넌트의 state는 객체 형식이여야 된다.
    //         number : 0,
    //         fixedNumber : 0
    //     };
    // }
    state = {
        number : 0,
        fixedNumber : 0
    };
    render()
    {
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.satate로 조회합니다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}</h2>
                <button
                    //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                    onClick={() => {//이벤트로 설정할 함수를 넣어 줄때는 화살표 함수 문법을 사용하여 넣어 주어야 한다.
                        this.setState(
                            {number : number + 1},
                            () => {
                                console.log('방금 setState가 호출되었습니다.');
                                console.log(this.state);
                            }
                        );
                        this.setState(preState => {
                            return {
                                number : preState.number + 1
                            };
                        });
                        //위 코드와 아래 코드는 완전히 똑같은 기능을 합니다.
                        //아래 코드는 함수에서 바로 객체를 반환한다는 의미입니다.
                        this.setState(proState => ({
                            number : proState.number + 1
                        }));
                    }}
                >
                 +1   
                </button>
            </div>
        );
    }
}  

export default Counter;

// const array = [1, 2];
// const one = array[0];
// const two = array[1];
// //비구조화 할당
// const [one, two] = array;