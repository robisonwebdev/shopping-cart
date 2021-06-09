import React, { useEffect, useState } from 'react';
import products from '../products/productsInformation.js';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
        console.log(match);
    }, []);

    const getProduct = () => {
        const getProduct = products[match.params.id - 1];
        setProduct(getProduct);
    }

    return (
        <div className='productDetails'>
            <div className='leftDetailsContainer'>
                <img src={product.image} alt={product.title} />
            </div>
            <div className='rightDetailsContainer'></div>
        </div>
    );
}

export default ProductDetails;