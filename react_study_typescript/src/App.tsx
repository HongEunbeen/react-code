import styled, {keyframes} from "styled-components"
import Circle from "./Circle";

function App() {
  return (
   <div>
    <Circle borderColor="black" bgColor="teal" text="Circle 1"/>
    <Circle bgColor="tomato"/>
   </div>
  );
}

export default App;
