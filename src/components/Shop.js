import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import products from '../products/productsInformation';
import '../styles/Shop.css';

const Shop = () => {
    const mappedData = products.map((item) => <Link to={`/shop/${item.id}`} key={item.id}><ProductCard {...item} /></Link>);

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