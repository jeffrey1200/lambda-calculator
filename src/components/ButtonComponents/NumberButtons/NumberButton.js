import React from "react";

const NumberButton = props => {

  let holder = props.test

  return ( 
    <div>
      <button onClick = {()=> {holder(props.oneToZero)}}>{props.oneToZero}</button>
    </div>

  );
};
export default NumberButton 

{/* Display a button element rendering the data being passed down from the parent container on props */}