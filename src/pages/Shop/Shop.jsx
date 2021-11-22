import { useState } from 'react';

import { PreviewCollection } from '../../components';
import SHOP_DATA from '../../data/shop';

import './shop.scss';

const Shop = () => {
  const [collections] = useState(SHOP_DATA);
  return (
    <div className="shop">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

export default Shop;
