import React, { useEffect, useState } from 'react';
import products from '../products/productsInformation.js';
import BackButton from '../components/BackButton';
import AddToCartButton from './AddToCartButton.js';
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
            <div className='productContainer'>
                <div className='leftProductDetails'>
                    <img src={product.image} alt={product.title} />
                </div>
                <div className='rightProductDetails'>
                    <div className='rightTop'>
                        <div>
                            <h2>{product.title}</h2>
                            <p>
                                <strong>About the house: </strong>
                                {product.description}
                            </p>
                        </div>
                        <AddToCartButton />
                    </div>
                    <div className='rightBottom'>
                        <BackButton text='Go Back' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;