import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { AppRoutes } from './AppRoutes';
import { ButtonProps } from './Buttons/ButtonState/ButtonProps';
import ButtonState from './Buttons/ButtonState/ButtonState';
import { Counter } from './Counter/Counter';
import { NavBar } from './NavBar/NavBar';
import { UserCards } from './Users/UserCards';

function App() {
  // const [text, setText] = useState('text for props Button');
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </BrowserRouter>

    // <div className="App">
    //   <h1>I'm React Application</h1>
    //   {/* <ButtonState/>
    //   <ButtonProps color="black" setText={setText}>{text}</ButtonProps> */}
    //   <Counter/>
    // </div>
    
  );
}

export default App;
