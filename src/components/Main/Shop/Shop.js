import React from 'react';
import products from '../../../products/productsInformation';
import ShopCard from './ShopCard';
import '../../../styles/Main/Shop/Shop.css';

const Shop = () => {
    const mapProducts = products.map(product => {
        return <ShopCard key={product.id} product={product} />
    });

    return (
        <section className='shop'>
            <h1>Bird Houses</h1>
            <section className='shop_products'>
                {mapProducts}
            </section>
        </section>
    );
};

export default Shop;