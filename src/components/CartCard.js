import React from 'react';
import QuantityControl from './QuantityControl';
import '../styles/CartCard.css';

const CartCard = (props) => {
    const { image, title, price, quantity, id } = props;

    function getSubtotal() {
        return (quantity * price).toFixed(2);
    }

    return (
        <div className='cartCard'>
            <img className='cartCardImage' src={image} alt='' />
            <h3 className='cartCardProduct'>{title}</h3>
            <p className='cartCardPrice'>{`$${price}`}</p>
            <QuantityControl increase={props.increase} decrease={props.decrease} id={id} />
            <p className='cartCardSubtotal'>{`$${getSubtotal()}`}</p>
        </div>
    );
}

export default CartCard;