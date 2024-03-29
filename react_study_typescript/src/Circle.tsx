import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor:string;
    borderColor:string;
}

const Container = styled.div<ContainerProps>`
    width : 100px;
    height : 300px;
    border-radius "10px";
    background-color : ${props => props.bgColor};
    border: 1px solid :${props => props.borderColor};
`;

interface CircleProps {
    bgColor:string;
    borderColor?:string;
    text?:string;
}

function Circle({borderColor, bgColor, text = "defautl text"}: CircleProps) {
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
        {text}
    </Container>;
}

export default Circle; 