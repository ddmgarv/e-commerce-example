import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';
const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='header__link'>
                <Logo className='header__link--logo' />
            </Link>
            <div className='header__container'>
                <Link
                    className='header__container--link'
                    children='SHOP'
                    to='/shop'
                />
                <Link
                    className='header__container--link'
                    children='CONTACT'
                    to='/shop'
                />
            </div>
        </div>
    );
};
export default Header;
