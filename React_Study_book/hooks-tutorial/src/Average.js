import React, {useEffect, useState, useReducer, useMemo ,useCallback ,useRef} from 'react';


//로컬 변수랑 > 렌더링과 상관없이 바뀔 수 있는 값
const getAverage = numbers => {
    console.log('평균값 계산 중 ..');
    if(numbers.length === 0) return 0;
    const sum = numbers.reduce((a, b) => a +b);
    return sum / numbers.length;
};

const Average = () =>{
    const [list, setList] = useState([]);
    const[number,setNumber] = useState('');
    const inputEl = useRef(null); // ref 안의 값이 바뀌어도 컴포넌트가 렌더링되지 않는다.!!!!

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);//컴포넌트가 처음 렌더링될때만 함수 생성

    const onInsert = useCallback(e =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
    },[number, list]);//number, list가 바귀었을 떄만 함수 생성 >> 함수 내부에서 상태 갑셍 의존할 떄 그 값을 반드시 두 번째 파라미터 안에 포함시켜 주기

    //useCallback(생성하고 싶은 함수 , 배열)
    //배열 > 어떤 값이 바뀌었을 때 함수 새로 생성 명시(비어있으면 렌더링시 만들었떤 함수 계속 재사용)

    const avg = useMemo(() => getAverage(list), [list]);
    //렌더링을 하는 과정에서 특정 값이 바뀌었을 때만 연산 실행 > 바귀지 않았다면 이전 결과 다시 사용
    //list 내용이 변경될 땨만 geAverage 함수 호출된다.


    return(
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>
            {/*useRef를 사용하면 ref 설정 시 useRef를 통해 만든 객체 안의 current값이 실제 엘리먼트 가르킨다.*/}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                  <li key ={index}>{value}</li>  
                ))}
            </ul>
            <div>
                <b>평균값 :</b> {avg}
            </div>
        </div>
    );
}

export default Average;


