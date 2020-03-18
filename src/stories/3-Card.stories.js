import React from 'react';
import Card from '../components/Card';
import ShapeCard from '../components/Shape-card';


export default {
    title: "Components|Card",
  
    parameters: {
      component: {
        ShapeCard,
        Card
      },
      componentSubtitle:
        "Componente de botão desenvolvido em seu estado Primário, é possível ver a mudança de hover do botão"
    }
};

export const baseCard = () => (
    <ShapeCard/>
);
 
export const card = () => (
    <Card/>
);