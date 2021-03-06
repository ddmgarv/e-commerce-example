import React from 'react';
import shopData from '../../config/shopData.json';
import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: shopData,
        };
    }

    render() {
        const { collections } = this.state;
        return (
            <div className='shopPage'>
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        );
    }
}

export default ShopPage;
