import React, {useState} from "react";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import "./App.css";

function App() {
  return (

    <div className="container">
      <Logo />
      <Display />
      <div className="App">
        <div className='flex-container'>
          <Specials />
          <Numbers />
        </div>
        <div className='flex-container-2'>
          <Operators />
        </div>
      </div>
    </div>
  );
}

export default App;
