import React from 'react';
import CollectionItem from '../collectionItem/CollectionItem';
import './collectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collectionPreview'>
            <h1 className='collectionPreview--title'>{title.toUpperCase()}</h1>
            <div className='collectionPreview__container'>
                {items
                    .filter((item, index) => index < 4)
                    .map(({ id, ...otherItemProps }) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
