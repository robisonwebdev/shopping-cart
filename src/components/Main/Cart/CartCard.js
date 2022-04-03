import React from 'react';
import '../../../styles/Main/Cart/CartCard.css';

const CartCard = ({ item }) => {
    const { image, price, quantity, title } = item;

    return (
        <tr className='cart_card'>
            <td><img src={image} alt={title} /></td>
            <td className='td_product'><h4>{title}</h4></td>
            <td><p>{price}</p></td>
            <td><input type='number' value={quantity} /></td>
            <td><p>$23.00</p></td>
        </tr>
    );
};

export default CartCard;