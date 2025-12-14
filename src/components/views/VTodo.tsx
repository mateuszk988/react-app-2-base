import React from 'react';

import OItemInput from '@organisms/OItemInput/OItemInput';
import TActivity from '@templates/TActivity';
import OFilters from '@organisms/OFilters/OFilters';

const VTodo: React.FC = () => (
  <TActivity
    content={
      <>
        <OItemInput />
        <OFilters />
      </>
    }
  />
);

export default VTodo;

// Wchodzimy pod dany URL --> wywołuje się VTodo --> VTodo wywołuje template + organizmy
