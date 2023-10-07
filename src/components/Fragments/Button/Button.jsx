import React from 'react';

import cl from './Button.module.css';

function Button({ text, styles, onClick }) {
  return (
    <button className={cl.button} style={{ ...styles }} onClick={(event) => onClick(event)}>
      {text}
    </button>
  );
}

export default Button;
