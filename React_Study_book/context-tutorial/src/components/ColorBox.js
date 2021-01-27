import React from 'react';
import {ColorConsumer} from '../contexts/color';

    // {/*패턴을 function as a child 혹은 Render Props */}
    // {/*ColorContext안에 들어있는 Consumer 컴포넌트 통해 색상 조회(props x) */}

const ColorBox = () => {
  return (
    <ColorConsumer>
        {({state}) => (
            <>
            <div
                style={
                    {width:'64px', height:'64px', background: state.color}
                }
            />
            <div
                style={
                    {width:'64px', height:'64px', background: state.subcolor}
                }
            />
            </>
            
        )}
    </ColorConsumer>
  );
};

export default ColorBox;