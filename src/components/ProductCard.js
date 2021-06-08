import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = (props) => {
    const { image, title, price } = props;

    return (
        <div className='productCard'>
            <img className='productImage' src={image} />
            <h6 className='productTitle'>{title}</h6>
            <p className='productPrice'>{`$${price}`}</p>
        </div>
    );
}

export default ProductCard;