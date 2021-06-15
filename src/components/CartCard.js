import React from 'react';
import QuantityControl from './QuantityControl';
import '../styles/CartCard.css';

const CartCard = (props) => {
    const { image, title, price, quantity } = props;

    function getSubtotal() {
        return quantity * price;
    }

    return (
        <div className='cartCard'>
            <img className='cartCardImage' src={image} alt='' />
            <h3 className='cartCardProduct'>{title}</h3>
            <p className='cartCardPrice'>{`$${price}`}</p>
            <QuantityControl />
            <p className='cartCardSubtotal'>{getSubtotal()}</p>
        </div>
    );
}

export default CartCard;