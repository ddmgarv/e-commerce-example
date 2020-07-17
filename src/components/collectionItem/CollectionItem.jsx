import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './collectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
	return (
		<div className='collectionItem' key={id}>
			<div
				className='collectionItem--image'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='collectionItem__footer'>
				<span className='collectionItem__footer--name'>{name}</span>
				<span className='collectionItem__footer--price'>{price}</span>
			</div>
			<CustomButton children='ADD TO CART' inverted />
		</div>
	);
};

export default CollectionItem;
