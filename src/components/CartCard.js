import React from 'react';
import QuantityControl from './QuantityControl';
import '../styles/CartCard.css';

const CartCard = (props) => {
    return (
        <div className='cartCard'>
            <img className='cartCardImage' src={props.image} alt='' />
            <h3 className='cartCardProduct'>{props.title}</h3>
            <p className='cartCardPrice'>{`$${props.price}`}</p>
            <QuantityControl />
            <p className='cartCardSubtotal'>{`$${(props.quantity)*(props.price)}`}</p>
        </div>
    );
}

export default CartCard;