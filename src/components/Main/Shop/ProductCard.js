import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <div className='productCard'>
            <img className='productImage' src={image} alt={title} />
            <div className='productInfo'>
                <h3 className='productTitle'>{title}</h3>
                <p className='productPrice'>{`$${price}`}</p>
            </div>
        </div>
    );
}

export default ProductCard;