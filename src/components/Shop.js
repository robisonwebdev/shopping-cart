import React from 'react';
import ProductCard from './ProductCard';
import products from '../products/productsInformation';

const Shop = () => {
    const mappedData = products.map((item) => <ProductCard {...item} key={item.id} />);

    return (
        <div className='shop'>
            {mappedData}
        </div>
    );
}

export default Shop;