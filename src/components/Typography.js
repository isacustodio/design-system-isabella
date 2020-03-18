import React from 'react';
import HeadingLG from './Heading-lg';
import HeadingMD from './Heading-md';
import HeadingSM from './Heading-sm';
import HeadingXS from './Heading-xs';
import Subtitle from './Subtitle';
import Paragraph from './Paragraph';

export default function Typography() {
	return (
		<div>
			<HeadingLG className='heading-lg' text='Heading LG'/>
			<HeadingMD className='heading-md' text='Heading MD'/>
			<HeadingSM className='heading-sm' text='Heading SM'/>
			<HeadingXS className='heading-xs' text='Heading XS'/>
			<Subtitle subtitle='Subtitle MD'/>
			<Paragraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquet nibh praesent tristique magna sit. Semper risus in hendrerit gravida rutrum quisque'/>
		</div>		
  	);
}