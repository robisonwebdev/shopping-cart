import React from 'react';
import '../../../styles/Main/Cart/CartCard.css';

const CartCard = ({ item }) => {
    const { image, price, quantity, title } = item;

    return (
        <li className='cart_card'>
            <div className='cart_card_information'>
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{price}</p>
                <input type='number' value={quantity} />
                <p>$23.00</p>
            </div>
            <hr />
        </li>
    );
};

export default CartCard;