import React, {useState} from "react";
import OperatorButton from './OperatorButton';
import {operators} from '../../../data';

const Operators = () => {
  const [data] = useState(operators);
  return (
    <div>
      <OperatorButton data={data} />
    </div>
  );
};

export default Operators;
