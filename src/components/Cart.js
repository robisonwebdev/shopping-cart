import React from 'react';
import CartCard from './CartCard';

const Cart = (props) => {
    const buildCart = () => {
        const { image, price, title, quantity } = props.cartItems[1];

        return <CartCard title={title} price={price} image={image} quantity={quantity} />
        // return console.log(props.cartItems[1]);
    }

    return (
        <div className='cart'>
            {buildCart()}
        </div>
    );
}

export default Cart;