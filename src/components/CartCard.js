import React from 'react';
import QuantityControl from './QuantityControl';
import '../styles/CartCard.css';

const CartCard = (props) => {
    return (
        <div className='cartCard'>
            <div className='cartCardProduct'>
                <img className='cartCardImage' src={props.image} alt='' />
                <div className='cartCardDetails'>
                    <h3>{props.title}</h3>
                    <p>{props.price}</p>
                    <QuantityControl />
                </div>
            </div>
            <div className='cartCardPrice'></div>
        </div>
    );
}

export default CartCard;