import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';

const Operators = (props) => {
  // console.log(props.operatorsData);

  const [data] = useState(operators);
  return (
    <div className='operator-container'>
      <OperatorButton data={data} />
    </div>
  );
};

export default Operators;
