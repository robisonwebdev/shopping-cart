import React from 'react';
import CartCard from './CartCard';
import '../styles/Cart.css';

const Cart = (props) => {
    const buildCart = () => {
        return <CartCard {...props.cartItems[1]} increase={props.increase} decrease={props.decrease} quantityChange={props.quantityChange} />
    }

    return (
        <div className='cart'>
            <table>
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
                    {buildCart()}
                </tbody>
            </table>
        </div>
    );
}

export default Cart;