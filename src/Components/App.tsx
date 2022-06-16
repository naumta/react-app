import React, { useState } from 'react';
import './App.css';
import { ButtonProps } from './Buttons/ButtonState/ButtonProps';
import ButtonState from './Buttons/ButtonState/ButtonState';
import { Counter } from './Counter/Counter';
import { UserCards } from './Users/UserCards';

function App() {
  // const [text, setText] = useState('text for props Button');
  return (
    // <div className="App">
    //   <h1>I'm React Application</h1>
    //   {/* <ButtonState/>
    //   <ButtonProps color="black" setText={setText}>{text}</ButtonProps> */}
    //   <Counter/>
    // </div>
    <UserCards/>
  );
}

export default App;
