import React from 'react';
import CartCard from './CartCard';
import '../styles/Cart.css';
import TotalPrice from './TotalPrice';

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
                        } else return null;
                    })}
                </tbody>
            </table>
            <TotalPrice cartItems={cartItems} />
        </div>
    );
}

export default Cart;