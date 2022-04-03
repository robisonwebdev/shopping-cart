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
            <table className='cart_items'>
                <thead>
                    <tr>
                        <th></th>
                        <th className='th_product'>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {mapCartItems}
                </tbody>
            </table>
            <TotalPrice cartItems={cartItems} />
            <Checkout />
        </section>
    );
};

export default Cart;