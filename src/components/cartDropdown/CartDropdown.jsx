import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './cartDropdown.scss';

const CartDropdown = () => {
    return (
        <div className='cartDropdown'>
            <div className='cartDropdown--items' />
            <CustomButton children='GO TO CHECKOUT' />
        </div>
    );
};

export default CartDropdown;
