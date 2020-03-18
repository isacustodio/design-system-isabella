import React from 'react';
import "../styles/css/Button.css";

export default function Button({className,children}) {
	return (
	<button type="button" className={className}>{children}</button>
  	);
}