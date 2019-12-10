import React from "react";

const OperatorButton = (props) => {
  return (
    <div>
    {props.data.map((operator, index) => (
      <button key={index}>{operator.char}</button>
    ))}
  </div>
  );
};

export default OperatorButton;