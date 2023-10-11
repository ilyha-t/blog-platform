import React from 'react';

function UniversalInput({ elementType, ...props }) {
  const Element = elementType || 'input';

  return <Element {...props} onChange={(e) => console.log(e.target.value)} />;
}

export default UniversalInput;
