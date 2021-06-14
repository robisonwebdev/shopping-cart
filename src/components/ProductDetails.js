import React, { useEffect, useState } from 'react';
import products from '../products/productsInformation.js';
import BackButton from '../components/BackButton';
import AddToCartButton from './AddToCartButton.js';
import '../styles/ProductDetails.css';
import CartButton from './CartButton.js';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        getProduct();
    });

    const getProduct = () => {
        const getProduct = products[id - 1];
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
                        <div className='rightTopDetails'>
                            <h2>{product.title}</h2>
                            <p>
                                <strong>About the house: </strong>
                                {product.description}
                            </p>
                        </div>
                        <AddToCartButton />
                    </div>
                    <div className='rightBottom'>
                        <CartButton text='Proceed to cart' />
                        <BackButton text='Go Back' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;