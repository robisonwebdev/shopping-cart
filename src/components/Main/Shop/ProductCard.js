import React from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ image, title, price }) => {
    return (
        <section className='product_card'>
            <img className='product_image' src={image} alt={title} />
            <div className='product_information'>
                <h3 className='product_name'>{title}</h3>
                <p className='product_price'>{`$${price}`}</p>
            </div>
        </section>
    );
}

export default ProductCard;