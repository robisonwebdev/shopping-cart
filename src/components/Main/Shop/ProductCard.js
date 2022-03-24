import React from 'react';
import '../../../styles/Main/Shop/ProductCard.css';

const ProductCard = ({ image, price, title }) => {
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