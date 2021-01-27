import {createContext, useState} from 'react';

//createContext의 기본값은 실제 Provider의 value에 넣는 객테의 형태와 일치시켜 주는 것이 좋다.
const ColorContext = createContext({
    state : { color : 'black', subcolor : 'red'},  
    actions : {
        setColor : () => {},
        setSubcolor : () => {}
    }
});

//ColorProvider 컴포넌트
    //ColorContext.Provider 렌더링
const ColorProvider = ({children}) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: {color, subcolor},
        actions : {setColor, setSubcolor}
    };

    //ColorContext.Provider의 value 에는 상태는 state로 업데이트 함수는 actions으로 묶어서 전달 (값을 동적으로 사용시 묶어줄 필요 없지만 객체 분리해주면 편리)
    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
}
//const ColorConsumer = ColorContext.Consumer
const {Consumer : ColorConsumer} = ColorContext;

//ColorProvider와 ColorConsumer 내보내기
export { ColorProvider, ColorConsumer};

export default ColorContext;