import React, { useState } from "react";
import styled, {keyframes} from "styled-components"
import Circle from "./Circle";

const Contianer = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.h1`
  color : ${(props) => props.theme.textColor};
`

function App() {

  return (
   <Contianer>
     <H1>protected</H1>
   </Contianer>
  );
}

export default App;
