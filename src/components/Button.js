
import React from 'react';

function Button(props) {
  return (
    <div className="buttoncontainer">
      <button>{props.message}</button>
    </div>
  );
}

export default Button;
