import React, {useState} from "react";
import SpecialButton from './SpecialButton';
import {specials} from '../../../data';

const Specials = (props) => {
  // console.log(props.specialsData);

  const [data] = useState(specials);
  return (
    <div className='specials-container'>
      <SpecialButton data={data} />
    </div>
  );
};

export default Specials;