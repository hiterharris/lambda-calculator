import React from "react";

const SpecialButton = (props) => {
  return (
    <div>
      {props.data.map((special, index) => (
        <button className='specials-button buttons' key={index}>{special}</button>
      ))}
  </div>
  );
};

export default SpecialButton;