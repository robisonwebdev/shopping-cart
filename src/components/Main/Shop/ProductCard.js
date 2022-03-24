import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <section className='product_card'>
            <img className='productImage' src={image} alt={title} />
            <div className='productInfo'>
                <h3 className='productTitle'>{title}</h3>
                <p className='productPrice'>{`$${price}`}</p>
            </div>
        </section>
    );
}

export default ProductCard;