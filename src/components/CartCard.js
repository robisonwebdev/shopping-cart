import React from 'react';
import QuantityControl from './QuantityControl';
import '../styles/CartCard.css';

const CartCard = (props) => {
    const { image, title, price, quantity, id } = props;

    function getSubtotal() {
        return (quantity * price).toFixed(2);
    }

    return (
        <tr className='cartCard'>
            <td><img className='cartCardImage' src={image} alt='' /></td>
            <td><h3 className='cartCardProduct'>{title}</h3></td>
            <td><p className='cartCardPrice'>{`$${price}`}</p></td>
            <td><QuantityControl id={id} quantity={quantity} quantityChange={props.quantityChange} /></td>
            <td><p className='cartCardSubtotal'>{`$${getSubtotal()}`}</p></td>
        </tr>
    );
}

export default CartCard;