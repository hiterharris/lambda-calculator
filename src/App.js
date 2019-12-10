import React, {useState} from "react";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers';
import Operators from './components/ButtonComponents/OperatorButtons/Operators';
import Specials from './components/ButtonComponents/SpecialButtons/Specials';
import Logo from "./components/DisplayComponents/Logo";
import Display from "./components/DisplayComponents/Display";
import {numbers} from './data';
import {operators} from './data';
import {specials} from './data';
import "./App.css";

function App() {
  const [number] = useState(numbers);
  const [operatorsData] = useState(operators);
  const [specialsData] = useState(specials);

  return (

    <div className="container">
      <Logo />
      <Display number={number} />
      <div className="App">
        <div className='flex-container'>
          <Specials specialsData={specialsData} />
          <Numbers />
        </div>
        <div className='flex-container-2'>
          <Operators operatorsData={operatorsData} />
        </div>
      </div>
    </div>
  );
}

export default App;
