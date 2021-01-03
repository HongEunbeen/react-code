import React, {useEffect, useState, useReducer} from 'react';
import useInputs from './useInputs';


const Info = () =>{

    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');

    const [state, onChange] = useInputs({
        name : '',
        nickname : ''
    })

    const {name, nickname} = state;

    return(
        <div>
            <div>
                <input value={name} onChange={onChange}/>
                <input value={nickname} onChange={onChange}/>
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


