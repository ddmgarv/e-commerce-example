import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/utils';
import './header.scss';
const Header = ({ currentUser }) => {
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
                {currentUser ? (
                    <button
                        className='header__container--link'
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </button>
                ) : (
                    <Link
                        className='header__container--link'
                        children='SIGN IN'
                        to='/signin'
                    />
                )}
            </div>
        </div>
    );
};
export default Header;
