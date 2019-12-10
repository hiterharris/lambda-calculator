import React, {useState} from "react";
import NumberButton from './NumberButton';
import {numbers} from '../../../data';

export default function Numbers() {
  const [data] = useState(numbers);
  return (
    <div className="numbers-container">
      <NumberButton data={data} />
    </div>
  );
};
