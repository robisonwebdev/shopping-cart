import React from 'react';
import ProductCard from './ProductCard';
import products from '../products/productsInformation';
import '../styles/Shop.css';

const Shop = () => {
    const mappedData = products.map((item) => <ProductCard {...item} key={item.id} />);

    return (
        <div className='shop'>
            <h2 className='shopTitle'>Bird Houses</h2>
            <div className='products'>
                {mappedData}
            </div>
        </div>
    );
}

export default Shop;