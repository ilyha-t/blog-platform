import React from 'react';

function UniversalInput({ elementType, ...props }) {
  const Element = elementType || 'input';

  return <Element {...props} />;
}

export default UniversalInput;
