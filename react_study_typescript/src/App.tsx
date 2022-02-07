import React, { useState } from "react";
import styled, {keyframes} from "styled-components"
import Circle from "./Circle";

function App() {
  const [value, setValue] = useState("");

  const onChange = (event:React.FormEvent<HTMLInputElement>) => {
    const {currentTarget: {value}} = event;
    setValue(value);
  };

  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
   <div>
     <form onSubmit={onSubmit}>
       <input 
       type="text" 
       placeholder="username" 
       onChange={onChange}
       value={value}/>
       <button>Log in</button>
     </form>
   </div>
  );
}

export default App;
