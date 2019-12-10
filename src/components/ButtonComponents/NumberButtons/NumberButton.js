import React from "react";

const NumberButton = props => {
  return ( 
    <div>
      <button>{props.oneToZero}</button>
    </div>

  );
};
export default NumberButton 

{/* Display a button element rendering the data being passed down from the parent container on props */}