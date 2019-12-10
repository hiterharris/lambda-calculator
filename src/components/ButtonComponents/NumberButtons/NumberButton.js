import React from "react";

const NumberButton = (props) => {
  return (
    <div>
      {props.data.map((number, index) => (
        <button key={index}>{number}</button>
      ))}
    </div>
  );
};

export default NumberButton;