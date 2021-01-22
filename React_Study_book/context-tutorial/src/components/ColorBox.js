import React from 'react';
import ColorContext from '../contexts/color';

    // {/*패턴을 function as a child 혹은 Render Props */}
    // {/*ColorContext안에 들어있는 Consumer 컴포넌트 통해 색상 조회(props x) */}

const ColorBox = () => {
  return (
    <ColorContext.Consumer>
        {value => (
            <div
                style={
                    {width:'64px', height:'64px', background: value.color}
                }
            />
        )}
    </ColorContext.Consumer>
  );
};

export default ColorBox;