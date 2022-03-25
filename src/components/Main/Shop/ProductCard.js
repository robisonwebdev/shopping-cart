import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Main/Shop/ProductCard.css';

const ProductCard = ({ product }) => {
    const { id, image, price, title } = product;

    return (
        <section className='product_card'>
            <Link to={`/shop/${id}`}><img className='product_image' src={image} alt={title} /></Link>
            <div className='product_information'>
                <Link to={`/shop/${id}`}><h3 className='product_name'>{title}</h3></Link>
                <p className='product_price'>{`$${price}`}</p>
            </div>
        </section>
    );
}

export default ProductCard;