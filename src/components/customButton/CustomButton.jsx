import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherProps }) => {
	return (
		<button type='button' className={`${inverted ? 'inverted' : ''} ${isGoogleBtn ? 'google--btn' : ''} customButton`} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;
