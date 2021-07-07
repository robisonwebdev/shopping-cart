import React, { useEffect, useState } from 'react';
import products from '../products/productsInformation.js';
import Button from '../components/Button';
import AddToCartButton from './AddToCartButton.js';
import '../styles/ProductDetails.css';
import { useParams } from 'react-router';

const ProductDetails = (props) => {
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
                        <AddToCartButton addItem={product} addToCart={props.addToCart} />
                    </div>
                    <div className='rightBottom'>
                        <Button text='Proceed to cart' link='/cart' className='cartButton' />
                        <Button text='Go Back' link='/shop' className='Button' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;