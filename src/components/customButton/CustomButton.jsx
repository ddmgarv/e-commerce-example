import React from 'react';
import './customButton.scss';

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <button type='button' className='customButton' {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
