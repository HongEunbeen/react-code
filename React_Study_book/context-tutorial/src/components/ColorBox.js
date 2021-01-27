import React,{useContext} from 'react';
import {ColorContext} from '../contexts/color';

    // {/*패턴을 function as a child 혹은 Render Props */}
    // {/*ColorContext안에 들어있는 Consumer 컴포넌트 통해 색상 조회(props x) */}

const ColorBox = () => {

  const {state} = useContext(ColorContext);
  return (
    <>
        <div
            style={{
                width:'64px',
                height:'64px',
                background: state.color
            }}
        />
        <div
            style={{
                width : '32px',
                height : '32px',
                background : state.subcolor
            }}
        />
    </>
  );
};

export default ColorBox;