import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '../Context/Context';
import './App.css';
import { AppRoutes } from './AppRoutes';
import { ButtonProps } from './Buttons/ButtonState/ButtonProps';
import ButtonState from './Buttons/ButtonState/ButtonState';
import { Counter } from './Counter/Counter';
import { Modal } from './Modal/Modal';
import { NavBar } from './NavBar/NavBar';


function App() {
  // const [text, setText] = useState('text for props Button');
  const [isAuth, setIsAuth] = useState(false);
  const[openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{isAuth, setIsAuth}}>
    <BrowserRouter>
      <div className="App">
        <NavBar setOpenModal={setOpenModal}/>
        <AppRoutes />
        <Modal openModal = {openModal} setOpenModal={setOpenModal}/>
      </div>
    </BrowserRouter>
    </Context.Provider>

    // <div className="App">
    //   <h1>I'm React Application</h1>
    //   {/* <ButtonState/>
    //   <ButtonProps color="black" setText={setText}>{text}</ButtonProps> */}
    //   <Counter/>
    // </div>
    
  );
}

export default App;
