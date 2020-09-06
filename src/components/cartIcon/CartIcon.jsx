import React from 'react';
import { ReactComponent as ShoppinIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleShowCart } from '../../redux/cart/cartActions';
import './cartIcon.scss';

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<div className='cartIcon' onClick={toggleCartHidden}>
			<ShoppinIcon className='cartIcon--icon' />
			<span className='cartIcon--itemCount'>0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	toggleCartHidden: () => dispatch(toggleShowCart()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
