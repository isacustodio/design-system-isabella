import React from 'react';
import HeadingLG from '../components/Heading-lg';
import HeadingMD from '../components/Heading-md';
import HeadingSM from '../components/Heading-sm';
import HeadingXS from '../components/Heading-xs';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';

export default {
    title: "Components|Typography",
  
    parameters: {
      component: {
        HeadingLG,
        HeadingMD,
        HeadingSM,
        HeadingXS,
        Subtitle,
        Paragraph
      },
      componentSubtitle:
        "Conjunto de elementos que compõe a tipográfia proposta pelo Design System"
    }
};

export const heading = () => (
  <div>
    <HeadingLG text='Heading LG'/>
    <HeadingMD text='Heading MD'/>
    <HeadingSM text='Heading SM'/>
    <HeadingXS text='Heading XS'/>
  </div>
);

export const subtitle = () => (
  <div>
    <Subtitle subtitle='Subtitle'/>
  </div>
);

export const paragraph = () => (
  <div>
    <Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Platea dictumst vestibulum rhoncus est pellentesque. Dui accumsan sit amet nulla facilisi. Purus non enim praesent elementum facilisis leo vel fringilla est. A scelerisque purus semper eget duis at tellus at urna. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Augue lacus viverra vitae congue eu consequat ac. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Praesent tristique magna sit amet purus gravida quis. Enim eu turpis egestas pretium. Nibh nisl condimentum id venenatis. Aliquam nulla facilisi cras fermentum odio.'/>
  </div>
);