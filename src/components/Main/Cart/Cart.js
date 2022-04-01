import React from 'react';
import CartCard from './CartCard';
import Checkout from './Checkout';
import TotalPrice from './TotalPrice';
import '../../../styles/Main/Cart/Cart.css';

const Cart = ({ cartItems, setCartItems }) => {
    const mapCartItems = cartItems.map(item => {
        return <CartCard key={item.id} item={item} />;
    });

    return (
        <section className='cart'>
            <h1>Cart</h1>
            <section className='cart_items'>
                {mapCartItems}
            </section>
            <TotalPrice />
            <Checkout />
        </section>
    );
};

export default Cart;