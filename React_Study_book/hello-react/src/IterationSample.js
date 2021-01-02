import React, { useState }  from 'react';

const IterationSample = () => {
    //const names = ['눈사람', '얼음' ,'눈' ,'바람'];
    //const nameList = names.map((name, index) => <li key={index}>{name}</li>);

    const [names, setNames] = useState([
        {id : 1, text : '눈사람'}, // 문자열과 고유 id
        {id : 2, text : '얼음'},
        {id : 3, text : '눈'},
        {id : 4, text : '바람'}
    ]);//데이터 배열

    const [inputText, setInputText] = useState(''); // 텍스트 입력할 수 있는 input의 상태
    const [nextId, setNextId] = useState(5);//데이터 배열에서 새로운 항목을 추가할 때 사용할 고유 id 상태 > 새로운 항목을 추가할 떄 사용할 id

    const nameList = names.map(name => <li onDoubleClick={() => onRemove(name.id)} key={name.id}>{name.text}</li>);
    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };
    const onChange = (e) => setInputText(e.target.value);
    const onClick = (e) => {

        //concat 함수 : 새로운 배열을 만들어 준다 / push 함수 : 기존 배열 자체를 변경해 준다.
        //>> 리액트에서 상태를 업데이트할 때는 기존 상태를 그대로 유지하면서 새로운 값을 상태로 설정해야 한다 > 불변성 유지 > 컴포넌트의 성능 최적화
        const nextNames = names.concat({ //배열의 내장 함수 concat 사용해 새로운 항목을 추가
            id : nextId,    //nextId값을 id로 설정하고
            text : inputText
        });

        setNextId(nextId + 1); // nextId 값을 1 더해주고
        setInputText(''); // inputText 비우고 
        setNames(nextNames); // names 값을 업데이트한다.
    };
    return (
        <>
            <input value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </>

    );
}

export default IterationSample



/*
const numbers = [1,2,3,4,5];
const result = numbers.map(num => num * num);
console.log(result);

>>[1,4,9,16,25]

const biggerThanThree = numbers.filter(number => number > 3);
//filter 함수의 인자에 분류하고 싶은 조건 반환하는 함수 넣어주면 쉽게 분류 가능

>>[4,5,6]

const withoutThree = numbers.filter(number => number !== 3);

>>[1,2,4,5]
*/