import React, { useState } from 'react';


import './Button.css';


const Button = props => {
console.log(props.condition)
  const [buttoncondition, setButtoncondition] = useState(false)
  


  return (
    <button type={props.type}  className="button" onClick={props.onClick}>
      {props.children} 
          </button>
  );
};

export default Button;
