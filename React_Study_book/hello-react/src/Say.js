import React, {useState} from 'react';


const Say = () => {
    const [message ,setMessage] = useState('');//useState 함수의 인자에는 상태의 초깃값을 넣어준다. > 클래스형 
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color , setColor] = useState('black');

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button style={{color : 'red'}} onClick={() => setColor('red')}>
                빨간색
            </button>
            <button style={{color : 'green'}} onClick={() => setColor('green')}>
                초록색
            </button>
            <button style={{color : 'blue'}} onClick={() => setColor('blue')}>
                파란색
            </button>
        </div>
    );
};

export default Say;


/*

잘못 된 코드 
useState() 의 세터 함수 , serState() 를 통해 업데이트 하기

// 클래스 형 컴포넌트에서
this.state.number = this.state.number + 1;
this.state.array = this.array.push(2);
this.state.object.value = 5;

// 함수형 컴포넌트에서
const [object, setObject] = useState({a : 1, b : 1});
object.b = 2;
*/