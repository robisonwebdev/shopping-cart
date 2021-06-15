import React from 'react';
import CartCard from './CartCard';

const Cart = (props) => {
    const buildCart = () => {
        return <CartCard {...props.cartItems[1]} increase={props.increase} decrease={props.decrease} />
    }

    return (
        <div className='cart'>
            {buildCart()}
        </div>
    );
}

export default Cart;