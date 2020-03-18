import React from 'react';
import Button from '../components/Button';

export default {
    title: "Components|Button",
  
    parameters: {
      component: {
        Button
      },
      componentSubtitle:
        "Componente de botão desenvolvido em seu estado Primário, é possível ver a mudança de hover do botão"
    }
};

export const primary = () => (
  <div>
    <Button className='primary-button' children='Primary button'/>
  </div>
);