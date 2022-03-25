import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/Main/Shop/ShopCard.css';

const ShopCard = ({ product }) => {
    const { id, image, price, title } = product;

    return (
        <section className='shop_card'>
            <Link to={`/shop/${id}`}><img className='shop_card_image' src={image} alt={title} /></Link>
            <div className='shop_card_information'>
                <Link to={`/shop/${id}`}><h3 className='shop_card_name'>{title}</h3></Link>
                <p className='shop_card_price'>{`$${price}`}</p>
            </div>
        </section>
    );
}

export default ShopCard;