import React, {useEffect, useState} from 'react';

const Info = () =>{

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return() => {
            console.log('cleanup');
            console.log(name);
        };
    },[name]);
    //두번째 매개변수에 배열을 넣으면 마운트, 언마운트 시에만 작동
    //두번째 매개변수에 배열에 검사 값을 넣으면 그 값만 마운트 업데이트 언마운트 시 작동

    /*
    useEffect(() => {
        console.log(name);
    },[name]);
    //배열 안에 useState 통해 관리하고 있는 상태 넣어도 되고, props로 전달받은 값 넣어도 된다
    
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
    },[]);
    */

    const onChangeName = e =>{
        setName(e.target.value);
    }

    const onChangeNickname = e =>{
        setNickname(e.target.value);
    }


    return(
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default Info;


