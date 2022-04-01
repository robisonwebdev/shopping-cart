import React from 'react';

const CartCard = ({ item }) => {
    const { image, price, title } = item;

    return (
        <section className='cart_card'>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p>{price}</p>
            <input />
            <p></p>
        </section>
    );
};

export default CartCard;