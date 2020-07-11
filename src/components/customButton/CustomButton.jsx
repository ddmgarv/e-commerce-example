import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => {
    return (
        <button
            type='button'
            className={`${isGoogleBtn ? 'google--btn' : ''} customButton`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
