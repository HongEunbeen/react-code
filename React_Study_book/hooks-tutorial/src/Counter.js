import React , { useState } from 'react';//useSatae 가져옴

const Counter = () => {

    const [value , setValue ] = useState(0);
    //useState(기본값)
    //useState > return 배열 > 첫번째 원소 : 상태 값 , 두번째 원소 : 상태 설정 함수(파라미터를 넣어서 호출 시 전달받은 파라미터로 값이 바뀐다음 컴포넌트 정상적 리렌더링)

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{value}</b>입니다.
                <button onClick={() => setValue(value + 1)}>+1</button>
                <button onClick={() => setValue(value - 1)}>-1</button>
            </p>
        </div>
    );
}

export default Counter;