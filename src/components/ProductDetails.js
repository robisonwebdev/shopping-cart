import React, { useEffect, useState } from 'react';
import products from '../products/productsInformation.js';
import '../styles/ProductDetails.css';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
    });

    const getProduct = () => {
        const getProduct = products[match.params.id - 1];
        setProduct(getProduct);
    }

    return (
        <div className='productDetails'>
            <div className='productDetailsContainer'>
                <div className='leftDetailsContainer'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='rightDetailsContainer'>
                    <div className='rightTop'>
                        <h2>{product.title}</h2>
                        <p>
                            <strong>About the house: </strong>
                            {product.description}
                        </p>
                    </div>
                    <div className='rightBottom'></div>
                </div>
                </div>
        </div>
    );
}

export default ProductDetails;