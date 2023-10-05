import React from 'react';

import cl from './DoubleLoader.module.css';

function DoubleLoader({ parentClasses, textAction }) {
  return (
    <div className={cl.loading__window}>
      <div className={`${cl.loadingio__spinner} ${parentClasses}`}>
        <div className={cl.ldio__ptkpihnu5r}>
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
        <span className={cl.loading__description}>{textAction}</span>
      </div>
    </div>
  );
}

export default DoubleLoader;
