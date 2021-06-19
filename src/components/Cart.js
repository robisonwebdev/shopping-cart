import React, { useEffect } from 'react';
import CartCard from './CartCard';
import '../styles/Cart.css';

const Cart = (props) => {
    const { cartItems } = props;

    return (
        <div className='cart'>
            <h1>Cart</h1>
            <table className='cartTable'>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => {
                        if (item['quantity'] > 0) {
                            return <CartCard {...item} key={item.id} quantityChange={props.quantityChange} />
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;