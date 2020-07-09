import React from 'react';
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
        </div>
    );
};

export default CollectionItem;
