import React from 'react';
import '../../../styles/Main/Cart/CartCard.css';

const CartCard = ({ item }) => {
    const { image, price, quantity, title } = item;

    const getSubtotal = () => {
        return (quantity * price).toFixed(2);
    };

    return (
        <tr className='cart_card'>
            <td><img src={image} alt={title} /></td>
            <td className='td_product'><h4>{title}</h4></td>
            <td><p>{price}</p></td>
            <td><input type='number' value={quantity} /></td>
            <td><p>{getSubtotal()}</p></td>
        </tr>
    );
};

export default CartCard;