import React from 'react';
import CustomButton from '../customButton/CustomButton';
import { connect } from 'react-redux';
import { addItemAction } from '../../redux/cart/cartActions';

import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
	const { id, name, price, imageUrl } = item;
	return (
		<div className='collectionItem' key={id}>
			<div className='collectionItem--image' style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className='collectionItem__footer'>
				<span className='collectionItem__footer--name'>{name}</span>
				<span className='collectionItem__footer--price'>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} children='ADD TO CART' inverted />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItemAction(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
