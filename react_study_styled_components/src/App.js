import styled, {keyframes} from "styled-components"

const Father = styled.div`
  display : flex;
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

const animation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    border-radius:100px;
  }
  100% {
    transform:rotate(360deg);
    border-radius:0px;
  }
`;

const Box = styled.div`
  width:200px; 
  height:200px; 
  background-color:tomato;
  display:flex;
  align-items:center;
  justify-content:center;
  animation:${animation} 1s linear infinite;
  &:hover{
    background-color:black;
  }
  span{
    font-size:36px;
    &:hover{
      font-size:40px;
    }
  }
`;

function App() {
  return (
    <>
      <Box>
        <span>😍</span>
      </Box>
    </>
  );
}

export default App;
