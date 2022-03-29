import React from 'react';
import Checkout from './Checkout';
import TotalPrice from './TotalPrice';
import '../../../styles/Main/Cart/Cart.css';

const Cart = () => {
    return (
        <section className='cart'>
            <h1>Cart</h1>
            <section className='cart_items'></section>
            <TotalPrice />
            <Checkout />
        </section>
    );
};

export default Cart;