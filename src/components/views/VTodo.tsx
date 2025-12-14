import React from 'react';

import OItemInput from '@organisms/OItemInput/OItemInput';
import TActivity from '@templates/TActivity';

const VTodo: React.FC = () => (
  <TActivity
    content={
      <>
        <OItemInput />
      </>
    }
  />
);

export default VTodo;

// Wchodzimy pod dany URL --> wywołuje się VTodo --> VTodo wywołuje template + organizmy
