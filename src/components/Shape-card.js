import React from 'react';
import '../styles/css/Shape.css';
import HeadingSM from './Heading-sm';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';
import Button from './Button';

export default function ShapeCard() {
	return (
        <div className='shape'>
            <HeadingSM text='Heading SM'/>
            <Subtitle subtitle='Subtitle SM'/>
            <Paragraph
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Platea dictumst vestibulum rhoncus est pellentesque. Dui accumsan sit amet nulla facilisi. Purus non enim praesent elementum facilisis leo vel fringilla est. A scelerisque purus semper eget duis at tellus at urna. Sed risus ultricies tristique nulla aliquet enim tortor at auctor. Augue lacus viverra vitae congue eu consequat ac. Dolor sit amet consectetur adipiscing elit ut aliquam purus. Praesent tristique magna sit amet purus gravida quis. Enim eu turpis egestas pretium. Nibh nisl condimentum id venenatis. Aliquam nulla facilisi cras fermentum odio.'
            />
            <Button className='primary-button' children='Button Label'/>
        </div>	
  	);
}