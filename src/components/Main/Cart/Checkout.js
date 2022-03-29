import React from 'react';
import '../../../styles/Main/Cart/Checkout.css'

const Checkout = () => {
    const checkoutAlert = () => {
        alert('Thanks for trying my mockup shopping site.');
    };

    return (
        <button className='checkout_button' onClick={checkoutAlert}>Checkout</button>
    );
}

export default Checkout;