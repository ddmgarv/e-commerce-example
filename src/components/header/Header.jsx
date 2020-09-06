import React, { Component } from 'react';
import CartIcon from '../cartIcon/CartIcon';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { auth } from '../../firebase/utils';
import CartDropdown from '../cartDropdown/CartDropdown';
import './header.scss';
const Header = ({ currentUser, hidden }) => {
	return (
		<div className='header'>
			<Link to='/' className='header__link'>
				<Logo className='header__link--logo' />
			</Link>
			<div className='header__container'>
				<Link className='header__container--link' children='SHOP' to='/shop' />
				<Link className='header__container--link' children='CONTACT' to='/shop' />
				{currentUser ? (
					<button className='header__container--link' onClick={() => auth.signOut()}>
						SIGN OUT
					</button>
				) : (
					<Link className='header__container--link' children='SIGN IN' to='/signin' />
				)}
				<CartIcon />
			</div>
			{!hidden && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
	currentUser,
	hidden,
});

export default connect(mapStateToProps)(Header);
