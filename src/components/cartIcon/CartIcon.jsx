import React from 'react';
import { ReactComponent as ShoppinIcon } from '../../assets/shopping-bag.svg';
import './cartIcon.scss';

const CartIcon = () => {
    return (
        <div className='cartIcon'>
            <ShoppinIcon className='cartIcon--icon' />
            <span className='cartIcon--itemCount'>0</span>
        </div>
    );
};
export default CartIcon;
