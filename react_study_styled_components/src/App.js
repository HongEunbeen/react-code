import styled from "styled-components"

const Father = styled.div`
  display : flex;
`;

const Box = styled.div`
  background-color:${(props) => props.bgColor}; 
  width:100px; 
  height:100px; 
`;

const Circle = styled(Box)`
  border-radius:50%;
`;

const Text = styled.span`
  color:white;
`;

const Btn = styled.button`
  color:white;
  background-color:tomato;
  border:0;
  border-radius:15px
`;

const Input = styled.input.attrs({requried : true})`
  background-color:toamto
`;

function App() {
  return (
    <Father>
      <Btn>Log in</Btn>
      <Btn as="Link" href="/">Log in</Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Father>
  );
}

export default App;
