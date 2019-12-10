import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      {props.data.map((number, index) => (
        <button className='number-button buttons' key={index}>{number}</button>
      ))}
    </div>
  );
};

export default NumberButton;